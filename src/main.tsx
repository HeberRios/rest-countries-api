import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import CountryDetails from './pages/CountryDetails.tsx';
import { ThemeProvider } from './context/themeChange.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:countryCode',
    element: <CountryDetails />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
