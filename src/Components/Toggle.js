import React, { useEffect, useState } from 'react';
import "../Css/Toggle.css"

function Toggle() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkTheme(savedTheme === 'dark');
      }
    }, []);
  
    useEffect(() => {
      document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);
  
    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
  return (
    <div>
      <div className="theme-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
    </div>
  )
}

export default Toggle
