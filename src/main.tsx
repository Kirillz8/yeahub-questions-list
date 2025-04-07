import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './shared/styles/index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './app/rootRouter.tsx';
import { store } from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={rootRouter} />
    </Provider>
  </StrictMode>,
);
