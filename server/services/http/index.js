const request = require("request-promise-native");

module.exports = {
  getJson: (uri) => request({
    uri,
    json: true
  })
};
