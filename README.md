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

#### useTextGeneration Example
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


#### useImageGeneration Example
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


#### usePredictiveCompletion Example
Refer to src/examples/PredictiveTextComponent.jsx
[!UsePredictiveCompletion Demonstration](/resources/example-usePredictiveCompletion.png)
[!UsePredictiveCompletion Demonstration](https://raw.githubusercontent.com/josharsh/ai-hooks/main/resources/example-usePredictiveCompletion.png)



#### useLanguageTranslation Example
Refer to src/examples/LanguageTranslationComponent.jsx
[!UseLanguageTranslation Demonstration](/resources/example-useLanguageTranslation.png)
[!UseLanguageTranslation Demonstration](https://raw.githubusercontent.com/josharsh/ai-hooks/main/resources/example-useLanguageTranslation.png)