import React, { useRef, useContext } from 'react';
import { Switch } from '@material-ui/core'
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const switchRef = useRef(null);

  return (
    <Switch
      ref={switchRef} 
      checked={theme === 'dark'}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSwitch;