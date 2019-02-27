import React from "react";

import Api from "../api";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Content from "../components/Content";
import List from "../components/List";
import GameItem from "../components/GameItem";
import SelectInput from "../components/SelectInput";
import EmptySearch from "../components/EmptySearch";
import UsersLabel from "../components/UsersLabel";

class Index extends React.Component {
  state = {
    loading: false,
    users: null,
    games: []
  };

  setGames = searchResult => {
    this.setState({
      loading: false,
      users: searchResult.users,
      games: searchResult.games
    });
  };

  renderItem = item => <GameItem key={item.appid} item={item} />;

  renderGamesList = () => {
    const { loading, games, users } = this.state;

    let html = null;
    let usersHtml = null;
    if (!loading && games.length) {
      html = <List data={games} renderItem={this.renderItem} />;
    } else if (!loading && !games.length && users && users.length) {
      html = <EmptySearch />;
    }

    if (!loading && users && users.length) {
      usersHtml = <UsersLabel users={users} />;
    }

    return (
      <div>
        {usersHtml}
        {html}
      </div>
    );
  };

  render() {
    const { loading } = this.state;

    const loadingHtml = loading ? <Loading /> : null;
    const gamesListHtml = this.renderGamesList();

    return (
      <Layout>
        <SelectInput onLoad={this.handleLoadGames} />
        <Content>
          {loadingHtml}
          {gamesListHtml}
        </Content>
      </Layout>
    );
  }

  handleLoadGames = usersNick => {
    this.setState(
      {
        loading: true
      },
      () => {
        Api.loadGames(usersNick).then(this.setGames);
      }
    );
  };
}

export default Index;
