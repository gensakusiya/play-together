const env = process.env.NODE_ENV;
const port = process.env.PORT;
const dev = env !== "production";

const path = dev ? `./env/dev.json` : `./env/production.json`;

const config = require(path);
const PORT = port || config.PORT;

module.exports = {
  DEV: dev,
  ...config,
  PORT
};
