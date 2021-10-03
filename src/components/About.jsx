import React, { Component } from "react";
import startModal from "../services/modal";

export default class About extends Component {
  render() {
    return (
      <div className="btn-about">
        <button className="contact-btn" onClick={() => startModal("modal-content")}>About</button>
      </div>
    ) 
  }
}
