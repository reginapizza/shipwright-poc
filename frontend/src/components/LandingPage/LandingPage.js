import React from 'react';
import background from '../../assets/images/shipit.jpg';
import { NavBar } from '../NavBar/NavBar.js';
import './LandingPage.css'

export const LandingPage = () => (
  <>
    <NavBar />
    <img src={background} className="background" alt="a container ship at sea" />
    <div className="float">
      <div className="blurb">A super catchy sentence that will capture your Attention. <br/>The Future of Building. </div>
    </div>

  </>
)