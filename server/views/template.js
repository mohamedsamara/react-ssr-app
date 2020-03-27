/* eslint arrow-body-style: 0, max-len: 0 */

const Template = (body, js, css, meta) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="robots" content="index,follow">
          ${meta}
          <link rel="icon" href="/assets/images/favicon.ico" />
          ${
            process.env.NODE_ENV === 'production'
              ? "<link rel='manifest' href='/assets/manifest.webmanifest' />"
              : ''
          } 
          ${css
            .map(path => `<link href="${path}" rel="stylesheet"/>`)
            .join('\n')}
        </head>
        <body>
          <div id="root">${body}</div>
          ${js.map(path => `<script src="${path}"></script>`).join('\n')} 
        </body>
      </html>
    `;
};

export default Template;
