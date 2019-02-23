const env = process.env.NODE_ENV;
const dev = env !== "production";

const path = dev ? `./env/dev.json` : `./env/production.json`;

const config = require(path);

module.exports = {
  DEV: dev,
  ...config
};
