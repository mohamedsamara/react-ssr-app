import "dotenv/config";
import express from "express";
import chalk from "chalk";
import cors from "cors";
import compression from "compression";

import middleware from "./middleware";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());
// app.use(routes);

// setup middleware
middleware(app);

// Starting the server
app.listen(PORT, () => {
  console.log(
    `${chalk.green("✓")} ${chalk.blue(
      `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
    )}`
  );
});
