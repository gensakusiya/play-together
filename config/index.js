const env = process.env.NODE_ENV;
const port = process.env.PORT;
const dev = env !== "production";

const path = dev ? `./env/dev.json` : `./env/production.json`;

const config = require("./env/production");

module.exports = {
  DEV: dev,
  ...config,
  PORT: port
};
