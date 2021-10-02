import React, { Component } from "react";
import Game from "./components/Game";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}
