import type { FC } from 'react';
import { ReactNode } from 'react';

import { Header } from '@/components/Header';

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
