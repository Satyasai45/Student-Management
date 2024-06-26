import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch checked={theme === 'dark'} onChange={toggleTheme} />
  );
};

export default ThemeSwitch;
