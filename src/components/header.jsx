import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h2>Try Glasses App Online</h2>
          <div className="overlay"></div>
        </div>
      </div>
    );
  }
}
