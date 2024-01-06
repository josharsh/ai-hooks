import { useState } from 'react';
import useStoryGeneration from 'genai-hooks';

const StoryGeneratorComponent = () => {
    const [storyPrompt, setStoryPrompt] = useState('');
    const openAIKey = 'YOUR_OPENAI_API_KEY'; // Replace with your API key

    const { generateStory, generatedStory, isLoading, error } = useStoryGeneration(openAIKey);

    const handleGenerateClick = () => {
        generateStory(storyPrompt);
    };

    return (
        <div>
            <h2>UseStoryGeneration Usage</h2>
            <textarea
                value={storyPrompt}
                onChange={(e) => setStoryPrompt(e.target.value)}
                placeholder="Enter a prompt for the story"
                rows={4}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <button onClick={handleGenerateClick} disabled={isLoading}>
                Generate Story
            </button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {generatedStory && (
                <div>
                    <strong>Generated Story:</strong> <p>{generatedStory}</p>
                </div>
            )}
        </div>
    );
};

export default StoryGeneratorComponent;
