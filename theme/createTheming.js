import React from 'react';

import themeProvider from './createProvider';
import theme from './withTheme';

export default defaultTheme => {
  const ThemeContext = React.createContext(defaultTheme);
  const ThemeProvider = themeProvider(defaultTheme, ThemeContext);
  const withTheme = theme(ThemeContext);

  return {
    ThemeProvider,
    ThemeContext,
    withTheme,
  };
};
