import { useState, useCallback } from "react";
import axios from "axios";

const useLanguageTranslation = (apiKey) => {
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const translateText = useCallback(
    async (text, targetLanguage) => {
      if (!apiKey) {
        setError(new Error("OpenAI API key is required"));
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const prompt = `Translate the following text to ${targetLanguage}: ${text}`;
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            messages: [
              {
                role: "system",
                content:
                  "You are a translator. Your job is to translate a given text into the target language. The target language should be a valid and known language, otherwise respond with Invalid/Unsupported Target Language",
              },
              { role: "user", content: prompt },
            ],
            model: "gpt-3.5-turbo",
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        const completionText = response.data.choices[0].message.content;
        setTranslatedText(completionText);
      } catch (err) {
        setError(err);
        setTranslatedText("");
      } finally {
        setIsLoading(false);
      }
    },
    [apiKey]
  );

  return { translateText, translatedText, isLoading, error };
};

export default useLanguageTranslation;
