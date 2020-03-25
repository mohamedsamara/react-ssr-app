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

  const css = assets.filter(
    path => String(path.split('.').pop()).toLowerCase() === 'css',
  );

  return [js, css];
};

export default extractChunks;
