import { useState } from 'react';
import usePredictiveText from '../hooks/usePredictiveCompletion';
import './PredictiveTextComponent.css';

const PredictiveTextInput = ({apiKey}) => {
  const [inputText, setInputText] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const { fetchSuggestions, suggestions, isLoading, error } = usePredictiveText(apiKey);

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
