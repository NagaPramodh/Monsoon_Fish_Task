// NameComponent.js
import React, { useState } from "react";

const NameComponent = ({ value, onChange, suggestions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleSelectSuggestion = (name) => {
    onChange(name);
    setIsOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder="Enter Name"
      />
      {isOpen && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NameComponent;
