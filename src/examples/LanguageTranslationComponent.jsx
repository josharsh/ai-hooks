import React, { useState } from 'react';
import useLanguageTranslation from '../hooks/useLanguageTranslation'

const LanguageTranslationComponent = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const { translateText, translatedText, isLoading, error } = useLanguageTranslation('YOUR_OPENAI_API_KEY');

  const handleTranslation = () => {
    translateText(textToTranslate, targetLanguage);
  };

  return (
    <div>
      <h2>Language Translation</h2>
      <input 
        type="text"
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
        placeholder="Enter text to translate"
        style={{ width: '300px', marginRight: '10px' }}
      />
      <input 
        type="text"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        placeholder="Enter target language (e.g., French)"
        style={{ width: '200px', marginRight: '10px' }}
      />
      <button onClick={handleTranslation} disabled={isLoading}>
        Translate
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {translatedText && (
        <div>
          <strong>Translated Text:</strong>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default LanguageTranslationComponent;
