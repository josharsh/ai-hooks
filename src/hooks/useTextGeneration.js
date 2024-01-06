import { useState, useCallback } from "react";
import axios from "axios";

const useTextGeneration = (apiKey) => {
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateText = useCallback(
    async (prompt) => {
      if (!apiKey) {
        setError(new Error("OpenAI API key is required"));
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: prompt,
            max_tokens: 150,
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        setGeneratedText(response.data.choices[0].text);
      } catch (err) {
        setError(err);
        setGeneratedText("");
      } finally {
        setIsLoading(false);
      }
    },
    [apiKey]
  );

  return { generateText, generatedText, isLoading, error };
};

export default useTextGeneration;
