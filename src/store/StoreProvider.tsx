import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

type StoreProviderProps = { children: ReactNode };
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
