const express = require("express");
const next = require("next");

const intersectionHandlerConstructor = require("./handlers/intersection");
const config = require("../config");

const app = next({ dev: config.DEV });
const handle = app.getRequestHandler();
const intersectionHandler = intersectionHandlerConstructor(config);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/intersection", async (req, res) => {
      if (!req.query.nick || req.query.nick.length < 2) {
        return res.json([]);
      }

      const result = await intersectionHandler(req.query.nick);

      return res.json(result);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(config.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port - ${config.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
