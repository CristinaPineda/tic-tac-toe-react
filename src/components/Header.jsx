import React, { Component } from "react";
import Contact from "../components/Contact";
import '../index.css';

export default class Header extends Component {
  render(){
    return (
      <div>
        <div className="header">
          <img src="https://img.icons8.com/external-prettycons-flat-prettycons/94/000000/external-tic-tac-toe-games-prettycons-flat-prettycons.png" alt="jogo tic-tac-toe"/>
          <h1>TIC TAC TOE</h1>
        </div>
        <div id="modal-content" class="modal-container">
          <Contact />
        </div>
      </div>
    )
  }
}
