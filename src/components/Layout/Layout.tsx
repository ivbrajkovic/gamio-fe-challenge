import type { FC } from 'react';
import { ReactNode } from 'react';

import { Hero } from '@/components/Header';

type LayoutProps = { children: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Hero />
    <main>{children}</main>
  </>
);

export default Layout;
