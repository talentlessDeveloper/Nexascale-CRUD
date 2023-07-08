/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useRef } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storageRef = window.localStorage.getItem('color-theme');
    if (typeof storageRef === 'string') {
      return storageRef;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setColorTheme] = useState(getInitialTheme);
  const isMountedRef = useRef(false);

  const setTheme = (value) => {
    const root = window.document.documentElement;
    const isDark = value === 'dark';

    // Update the class immediately without transition
    root.style.transition = 'none';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(value);

    // Enable transition after a delay to avoid flicker
    setTimeout(() => {
      root.style.removeProperty('transition');
    }, 50);

    setColorTheme(value);
    window.localStorage.setItem('color-theme', value);
  };

  useEffect(() => {
    // Add listener to update styles
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (isMountedRef.current) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    // Setup dark/light mode for the first time
    if (isMountedRef.current) {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    } else {
      isMountedRef.current = true;
    }

    // Remove listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
