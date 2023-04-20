import '@fontsource/inter/600.css';
import '@fontsource/inter/900.css';

import { Notifications } from '@mantine/notifications';
import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout';
import { StoreProvider } from '@/store/StoreProvider';
import { ThemeProvider } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Layout>
          <Notifications />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  );
}
