import ReactDOMServer from 'react-dom/server';
import { RemixServer } from 'remix';
import { ServerStyleSheet } from 'styled-components';

import StylesContext from './styles-context';

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const sheet = new ServerStyleSheet();

  const styles = sheet.getStyleTags();
  sheet.seal();

  const markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
