const extractChunks = chunks => {
  let assets = chunks;
  assets = typeof assets === 'string' ? { app: assets } : assets;
  // eslint-disable-next-line compat/compat
  assets = Array.isArray(assets) ? assets : Object.values(assets);
  // flatten array if multidimensional
  assets =
    assets[0].constructor === Array ? [].concat.apply([], ...assets) : assets;

  let js = assets.filter(
    path => String(path.split('.').pop()).toLowerCase() === 'js',
  );

  if (process.env.NODE_ENV === 'development') {
    js = js.map(path => `/${path}`);
  }

  const scripts = js.map(path => `<script src="${path}"></script>`).join('');

  const pwa = assets.filter(path => path.indexOf('/images/icon') !== -1);

  const pwaLinks = pwa
    .map(
      path =>
        `<link rel="apple-touch-icon" sizes="${path.substring(
          path.indexOf('_') + 1,
          path.indexOf('.'),
        )}" href="${path}" />`,
    )
    .join('');

  const css = assets.filter(
    path => String(path.split('.').pop()).toLowerCase() === 'css',
  );

  const styles = css
    .map(path => `<link href="${path}" rel="stylesheet" />`)
    .join('');

  return [scripts, styles, pwaLinks];
};

export default extractChunks;
