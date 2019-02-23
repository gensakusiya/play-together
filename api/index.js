import fetch from "isomorphic-unfetch";

class Api {
  loadGames = (nicks) => {
    const query = nicks.map(nick => `nick=${nick}`).join('&');
    return fetch(`/intersection?${query}`).then(res => res.json());
  }
}

export default new Api();
