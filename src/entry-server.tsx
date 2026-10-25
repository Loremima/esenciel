import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HeadProvider, headToHtml, type HeadData } from './lib/head';

export { STATIC_ROUTES } from './routes';

export function render(url: string) {
  const collector: { data?: HeadData } = {};
  const html = renderToString(
    <StrictMode>
      <HeadProvider collector={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadProvider>
    </StrictMode>,
  );
  return { html, head: collector.data ? headToHtml(collector.data) : '' };
}
