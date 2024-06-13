import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleDarkMode}></button>
      </div>
    </div>
  );
};

export default App;
