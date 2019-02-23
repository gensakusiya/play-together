import React from "react";

import Api from "../api";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Content from "../components/Content";
import List from "../components/List";
import GameItem from "../components/GameItem";
import SelectInput from "../components/SelectInput";

class Index extends React.Component {
  state = {
    loading: false,
    games: []
  };

  setGames = games => {
    this.setState({
      loading: false,
      games
    });
  };

  renderItem = item => <GameItem key={item.appid} item={item} />;

  render() {
    const { loading, games } = this.state;

    const loadingHtml = loading ? <Loading /> : null;
    const gamesListHtml =
      !loading && games.length ? (
        <List data={games} renderItem={this.renderItem} />
      ) : null;

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
