# genai-hooks

`genai-hooks` is a collection of React hooks tailored for integrating AI models, such as OpenAI, into your React applications. This package simplifies the process of connecting to various AI APIs, managing responses, and handling state.

## Installation

To install `genai-hooks`, run the following command in your project directory:

```bash
npm install genai-hooks
```

## Available Hooks
1. useTextGeneration - For Generating Text
2. useImageGeneration - For Generating Images
3. usePredictiveCompletion - For predictive text input suggestions.

## Sample Usage

#### useTextGeneration
```
import { useState } from 'react';
import useTextGeneration from 'genai-hooks';

const TextGeneratorComponent = () => {
    const [inputPrompt, setInputPrompt] = useState('');
    const openAIKey = 'YOUR_OPENAI_API_KEY';

    const { generateText, generatedText, isLoading, error } = useTextGeneration(openAIKey);

    const handleGenerateClick = () => {
        generateText(inputPrompt);
    };

    return (
        <div>
            <h2>UseTextGeneration Usage</h2>
            <textarea
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Enter a prompt for AI"
                rows={4}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <button onClick={handleGenerateClick} disabled={isLoading}>
                Generate Text
            </button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {generatedText && <div><strong>Generated Text:</strong> <p>{generatedText}</p></div>}
        </div>
    );
};

export default TextGeneratorComponent;
```


#### useImageGeneration
```
import { useState } from 'react';
import {useImageGeneration} from 'genai-hooks'

const ImageGeneratorComponent = () => {
    const [prompt, setPrompt] = useState('');
    const openAIKey = 'YOUR_OPENAI_API_KEY';
    const { generateImage, imageUrl, isLoading, error } = useImageGeneration(openAIKey);

    const handleGenerateClick = () => {
        generateImage(prompt);
    };

    return (
        <div>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a description"
            />
            <button onClick={handleGenerateClick} disabled={isLoading}>
                Generate Image
            </button>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {imageUrl && <img src={imageUrl} alt= "Generated Image" />}
        </div>
    );
};

export default ImageGeneratorComponent;
```


#### usePredictiveCompletion
```
import { useState } from 'react';
import { usePredictiveCompletion } from 'genai-hooks';

const PredictiveTextInput = () => {
  const [inputText, setInputText] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const apiKey = 'YOUR_OPENAI_API_KEY';
  const { fetchSuggestions, suggestions, isLoading, error } = usePredictiveCompletion(apiKey);

  const handleChange = (event) => {
    setInputText(event.target.value);
    fetchSuggestions(event.target.value);
    setSelectedSuggestionIndex(-1);
  };

  const appendSuggestion = (suggestion) => {
    let words = inputText.split(' ');
    words.pop(); 
    words.push(suggestion); 
    setInputText(words.join(' ') + ' ');
  };

  const handleSuggestionClick = (suggestion) => {
    appendSuggestion(suggestion);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown' && selectedSuggestionIndex < suggestions.length - 1) {
      setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
    } else if (event.key === 'ArrowUp' && selectedSuggestionIndex > 0) {
      setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
    } else if (event.key === 'Enter' && selectedSuggestionIndex >= 0) {
      appendSuggestion(suggestions[selectedSuggestionIndex]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something..."
        aria-label="Predictive text input"
        aria-autocomplete="list"
      />
      {isLoading && <p>Loading suggestions...</p>}
      {error && <p>Error: {error.message}</p>}
      {inputText && suggestions && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={index === selectedSuggestionIndex ? 'selected' : ''}
              onClick={() => handleSuggestionClick(suggestion)}
              role="option"
              aria-selected={index === selectedSuggestionIndex}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PredictiveTextInput;

```
[![UsePredictiveCompletion Demonstration](/resources/example-usePredictiveCompletion.png)]