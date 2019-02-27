const UserServiceConstructor = require("../services/users");
const GameServiceConstructor = require("../services/games");

const createResponseModel = (nicknames, steamUsers, games) => {
  const users = nicknames.map((nick, index) => ({
    id: steamUsers[index].steamid || null,
    nick
  }));

  return {
    users,
    games,
  };
};

module.exports = config => {
  const UserService = UserServiceConstructor(config);
  const GameService = GameServiceConstructor(config);

  return async nicknames => {
    try {
      const users = await UserService.getUsersByNick(nicknames);
      const onlyPublicUsersIds = UserService.getPublicUserId(users);

      if (onlyPublicUsersIds.length < 2) {
        return createResponseModel(nicknames, users, []);
      }

      const usersGames = await GameService.getUserOwnGames(onlyPublicUsersIds);
      const tagGame = await GameService.getGamesWithTag(
        GameService.TAG.MULTIPLAYER
      );

      const multiplayerGames = GameService.filterGamesByTag(
        usersGames[0],
        tagGame
      );

      if (!multiplayerGames.length) {
        return createResponseModel(nicknames, users, []);
      }

      const data = [multiplayerGames, ...usersGames.slice(1)];
      const intersections = GameService.intersection(data);

      return createResponseModel(nicknames, users, intersections);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
};
