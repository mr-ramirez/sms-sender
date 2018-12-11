import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import './styles/Header.css';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="Header_container">
          <img src={logo} className="Header_logo" alt="logo" />
          <h1 className="Header_title">React Programming Exercise</h1>
        </header>

        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </Router>
      </div>
    );
  }
}

export default Header;
