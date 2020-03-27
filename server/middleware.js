import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import historyApiFallback from "connect-history-api-fallback";

// SSR Imports
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import Router from '../client/app/router';
import Application from '../client/app/components/Application';
import Header from '../client/app/components/Header';

// eslint-disable-next-line import/no-unresolved
import webpackConfig from '../webpack/client/webpack.dev';

import Template from './views/template';
import extractChunks from './utils/chunks';

const middleware = app => {
  app.use('/assets', express.static(path.resolve(__dirname, '../client')));

  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);

    app.use(
      webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        writeToDisk: true,
        serverSideRender: true,
      }),
    );

    app.use(webpackHotMiddleware(compiler));

    app.get('*', (req, res) => {
      const [js, css] = extractChunks(
        res.locals.webpackStats.toJson().assetsByChunkName,
      );

      const context = {};
      const body = renderToString(
        <StaticRouter location={req.originalUrl} context={context}>
          <Router />
        </StaticRouter>,
      );

      const helmet = Helmet.renderStatic();
      const meta = `
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
      `.trim();

      res
        .set('Content-Type', 'text/html')
        .status(200)
        .end(Template(body, js, css, meta));
    });
  } else {
    (async () => {
      let assets = await import(
        /* webpackMode: "eager" */ './../build/client/chunk-manifest.json'
      );

      assets = JSON.parse(JSON.stringify(assets.default));

      app.get('*', (req, res) => {
        const [js, css] = extractChunks(assets);

        const context = {};
        const body = renderToString(
          <StaticRouter location={req.originalUrl} context={context}>
            <Application>
              <Router />
            </Application>
          </StaticRouter>,
        );

        const helmet = Helmet.renderStatic();
        const meta = `
          ${helmet.meta.toString()}
          ${helmet.title.toString()}
        `.trim();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(Template(body, js, css, meta));
      });
    })();
  }
};

export default middleware;
