import React, { Component } from 'react';
import {render} from 'react-dom';
import '../index.html';
import '../css/header.scss';
import Typed from 'typed.js';

class Greeting extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 60
    }
    this.typed = new Typed('#greeting', options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div id="greeting-wrapper">
      <h1 id="greeting"></h1>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <Greeting strings={['^2000Hello, world.^2000\nI\'m Kenny Schank.']} />
      </header>
    );
  }
}

export default Header;