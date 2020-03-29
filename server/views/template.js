/* eslint arrow-body-style: 0, max-len: 0 */

const Template = (body, scripts, styles, pwa, meta) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="robots" content="index,follow">
          <meta name="apple-mobile-web-app-title" content="React SSR Application">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <meta name="apple-mobile-web-app-status-bar-style" content="default">
          <meta name="theme-color" content="#4a68aa">
          <link rel="icon" href="/images/favicon.ico" />
          ${pwa}
          ${meta}
          ${
            process.env.NODE_ENV === 'production'
              ? "<link rel='manifest' href='/manifest.webmanifest' />"
              : ''
          }
          ${styles}
        </head>
        <body>
          <div id="root">${body}</div>
          ${scripts} 
        </body>
      </html>
    `;
};

export default Template;
