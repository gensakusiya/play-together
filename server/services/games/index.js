const { getJson } = require("../http");

const { getIntersectionByArray } = require("./set");

let gameWithTagCache = null;

class Service {
  constructor(config) {
    this.config = config;

    this.TAG = {
      MULTIPLAYER: "Multiplayer"
    };

    this.timestamp = new Date().valueOf();
  }

  cachesIsRotten() {
    const diff = Math.floor((new Date().valueOf() - this.timestamp) / 1000 / 60);

    if (diff > this.config.STEAMSPY.CACHE_TTL) {
      this.timestamp = new Date().valueOf();
      return true;
    }

    return false;
  }

  getGameUri(userId) {
    return `${this.config.STEAM.URI.GAMES}/?key=${
      this.config.STEAM.KEY
    }&steamid=${userId}&include_appinfo=1&format=json`;
  }

  getTagUri(tag) {
    return `${this.config.STEAMSPY.URI}?request=tag&tag=${tag}`
  }

  filterGamesByTag(games, taggedGames) {
    return games.filter(game => taggedGames[game.appid]);
  }

  intersection(usersGames) {
    if (Array.isArray(usersGames)) {
      return getIntersectionByArray(usersGames);
    }

    return [];
  }

  async getGamesWithTag(tag) {
    if (gameWithTagCache === null || (gameWithTagCache && this.cachesIsRotten())) {
      gameWithTagCache = getJson(this.getTagUri(tag));
    }

    return gameWithTagCache;
  }

  async getUserOwnGames(usersIds) {
    return Promise.all(
      usersIds.map(userId =>
        getJson(this.getGameUri(userId)).then(res => res.response.games)
      )
    );
  }
}

module.exports = config => {
  return new Service(config);
};
