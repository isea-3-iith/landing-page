import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import cse_building from "./assets/CSE-Building.jpg";
import iith_logo from "./assets/CSELogo.png";
import mnistry_logo from "./assets/meity-logo-2.png";
import isea_logo from "./assets/ISEA.png";


function App() {

  const Button = styled.button``

  return (
    <>
      <section id='header-area'>
        <header>
          <figure id="image-container">
            <img src={isea_logo} alt="isea logo" srcset="" id='isea_logo'/>
            <img src={cse_building} alt="CSE Building IITH" srcset="" id='cse_building' className='logo'/>
            <img src={mnistry_logo} alt="ministry logo" srcset="" id='minisrty_logo'/>
            <img src={iith_logo} alt="iith logo" srcset="" id='iith_logo'/>            
          </figure>
        </header>
      </section>

      <section id="body">
        <h2>WEBISITE TO BE UPDATED</h2>
      </section>

      <section id="footer">

      </section>
    </>
  );
}

export default App;
