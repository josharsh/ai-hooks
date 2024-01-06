import { useState, useCallback, useMemo } from "react";
import OpenAI from "openai";
import { debounce } from "lodash";

const usePredictiveCompletion = (apiKey, options = {}) => {
  const [state, setState] = useState({
    suggestions: [],
    isLoading: false,
    error: null,
  });

  const openai = useMemo(
    () => new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true }),
    [apiKey]
  );

  const fetchSuggestions = useCallback(
    debounce(async (text) => {
      setState({ ...state, isLoading: true, error: null });

      try {
        const response = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are a predictive text generator. Your job is to predict the next word or sequence of words (strictly limited to 3 words) which is coherent with what user has written so far.",
            },
            { role: "user", content: text },
          ],
          model: "gpt-3.5-turbo",
          ...options,
        });
        const suggestions = response.choices[0].message.content.split(" ");
        setState({ ...state, suggestions, isLoading: false });
      } catch (err) {
        setState({ ...state, error: err, isLoading: false });
      }
    }, 300),
    [apiKey, options]
  );

  const resetError = useCallback(() => {
    setState({ ...state, error: null });
  }, []);

  return { ...state, fetchSuggestions, resetError };
};

export default usePredictiveCompletion;
