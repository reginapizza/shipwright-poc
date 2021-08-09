import React from 'react';
import logo from '../../assets/images/shipwrightlogo.svg';
import { FaGithub } from 'react-icons/fa'
require('./navbar.css');

export const NavBar = () => (
  <div className="navbar container">
    <img src={logo} className="logo" alt="Shipwright logo" />
    <div className="navlinks">
      <a href="/">How It Works</a>
      <a href="https://github.com/shipwright-io/build">
          GitHub
          <span className="icon"><FaGithub /></span>
        </a>
    </div>
  </div>
)