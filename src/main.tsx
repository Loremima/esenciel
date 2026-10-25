import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/inter';
import App from './App';
import { HeadProvider } from './lib/head';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);

// Les pages sont prérendues au build : on réutilise ce HTML au lieu de le recréer.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
