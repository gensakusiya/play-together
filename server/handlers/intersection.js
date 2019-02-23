const UserServiceConstructor = require("../services/users");
const GameServiceConstructor = require("../services/games");

module.exports = config => {
  const UserService = UserServiceConstructor(config);
  const GameService = GameServiceConstructor(config);

  return async nicknames => {
    try {
      const users = await UserService.getUsersByNick(nicknames);
      const onlyPublicUsersIds = UserService.getPublicUserId(users);

      if (onlyPublicUsersIds.length < 2) {
        return [];
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
        return [];
      }

      const data = [multiplayerGames, ...usersGames.slice(1)];

      return GameService.intersection(data);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
};
