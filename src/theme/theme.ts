import type { MantineThemeOverride } from '@mantine/core';

import colorsShades from '@/theme/colors/colorsShades.json';

type ColorsShades = Record<string, { length: 10 } & string[]>;

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter',

  colors: colorsShades as ColorsShades,
  primaryColor: 'primary',
  primaryShade: 6,

  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1260,
        },
      },
    },
    Button: {
      styles: () => ({
        root: {
          transition: 'all 0.2s ease-out',
        },
      }),
    },
  },
};
