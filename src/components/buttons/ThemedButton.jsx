import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import LightModeButton from './LightModeButton';
import DarkModeButton from './DarkModeButton';

const ThemedButton = (props) => {
  const { darkMode } = useTheme();
  
  return darkMode ? <DarkModeButton {...props} /> : <LightModeButton {...props} />;
};

export default ThemedButton;