import React from 'react';
import {render} from 'react-dom';
import '../index.html';
import '../css/app.scss';
import '../css/reset.scss';
import '../images/logo-16.png';
import logo from '../images/logo.svg';
import Typed from 'typed.js';

import Header from './Header';
import Languages from './Languages';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Languages />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));