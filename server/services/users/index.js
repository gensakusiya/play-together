const { getJson } = require("../http");

class Service {
  constructor(config) {
    this.config = config;
  }

  getUserUri(nickname) {
    return `${this.config.STEAM.URI.USER}/?key=${
      this.config.STEAM.KEY
    }&vanityurl=${nickname}`;
  }

  getPublicUserId(users) {
    const result = [];
    users.forEach(user => {
      if (user.success === 1) result.push(user.steamid);
    });

    return result;
  }

  async getUsersByNick(nicknames) {
    return Promise.all(
      nicknames.map(nickname =>
        getJson(this.getUserUri(nickname)).then(res => res.response)
      )
    );
  }
}

module.exports = config => {
  return new Service(config);
};
