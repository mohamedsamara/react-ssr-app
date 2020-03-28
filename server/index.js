import 'dotenv/config';
import express, { Router } from 'express';
import chalk from 'chalk';
import cors from 'cors';
import compression from 'compression';

import routes from './routes';
import middleware from './middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());
app.use('/api', routes);

// setup middleware
middleware(app);

// Starting the server
app.listen(PORT, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
    )}`,
  );
});
