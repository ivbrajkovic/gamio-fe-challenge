import type { ColorScheme } from '@mantine/core';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { FC, useState } from 'react';

import { theme } from './theme';

type ThemeProviderProps = { children: React.ReactNode };
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ThemeProvider;
