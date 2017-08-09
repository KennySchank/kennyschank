import React, { Component } from 'react';
import {render} from 'react-dom';
import * as data from './data';
import '../index.html';
import '../css/languages.scss';

class Language extends React.Component {
  render() {
    const data = this.props.data;
    const meterStyle = {
      width: data.proficiency * 10 + "%",
      backgroundColor: data.color,
      backgroundImage: data.icon
    };
    return (
      <div className="language" id={data.id}>
        <h3 title={data.description}>{data.name}</h3>
        <div className="meterWrapper"><div className="meter" style={meterStyle}></div></div>
      </div>
    );
  }
}

class Languages extends React.Component {
  render() {
    return (
      <section id="languages" className="dark">
        <Language data={data.languages[0]} />
        <Language data={data.languages[1]} />
      </section>
    )
  }
}

export default Languages;