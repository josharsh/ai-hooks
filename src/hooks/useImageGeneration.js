import { useState, useCallback } from "react";
import OpenAI from "openai";

const useImageGeneration = (apiKey) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImage = useCallback(
    async (prompt) => {
      setIsLoading(true);
      setError(null);

      const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

      try {
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt: prompt,
        });
        setImageUrl(response.data[0].url);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [apiKey]
  );

  return { generateImage, imageUrl, isLoading, error };
};

export default useImageGeneration;
