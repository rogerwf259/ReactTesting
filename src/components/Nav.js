import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li>
            <IndexLink to="/" activeClassName="active" className="link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/Countdown" activeClassName="active" className="link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <span>Created by <a href="" target="_blank">Roger Silva</a></span>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Nav;
