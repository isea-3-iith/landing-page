import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import cse_building from "./assets/CSE-Building.jpg";


function App() {

  const Button = styled.button``

  return (
    <>
      <section id='header-area'>
        <header>
          <figure>
            <img src={cse_building} alt="CSE Building IITH" srcset="" id='cse_building'/>
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
