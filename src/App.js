import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import cse_building from "./assets/CSE-Building.jpg";
import iith_logo from "./assets/CSELogo.png";

import isea_logo from "./assets/ISEA.png";
// import GoogleFontLoader from 'react-google-font-loader';
import WebFont from "webfontloader";
import Navbar from "./Navbar/Navbar";

WebFont.load({
    google: {
        families: ["Roboto:400,700", "Open Sans", "Montserrat:400,500,700"],
    },
});

function App() {
    const Button = styled.button``;

    return (
        <>
            <Navbar />
            <section id="header-area">
                <header>
                    <figure id="image-container">
                        <img
                            src={isea_logo}
                            alt="isea logo"
                            srcset=""
                            id="isea_logo"
                        />
                        <img
                            src={cse_building}
                            alt="CSE Building IITH"
                            srcset=""
                            id="cse_building"
                            className="logo"
                        />

                        <img
                            src={iith_logo}
                            alt="iith logo"
                            srcset=""
                            id="iith_logo"
                        />
                    </figure>
                </header>
                <nav id="heading-area" className="montserrat-heading-zone">
                    <pre id="bootcamp-name" className="roboto-regular">
                        <p>A bootcamp on</p>
                        <h1>
                            <em>Wireless Security</em>
                        </h1>
                        <p>under ISEA Phase III</p>
                    </pre>
                    <div id="bootcamp-date">
                        <p id="date">27 Jan - 1 Feb 2025</p>
                    </div>
                </nav>
            </section>

            <h2>
                <i>WEBISITE TO BE UPDATED</i>
            </h2>
            <section id="body">
                <div id="main-area">
                    <article id="about" className="about">
                        <p className="about">
                            An oppertunity to learn from IITH faculty, deepen
                            undertsnding of wireless network vulnurabilities and
                            get participation certificates. Top performers in
                            CTF/Projects have exciting rewards.
                        </p>
                    </article>
                </div>

                <aside id="registration-details">
                    <h2 id="registration-underlined">
                        <u>Registration Details:</u>
                    </h2>
                    <ul>
                        <li>
                            All BTech/MTech/PhD students from CS/AI/ECE/EE/IT
                            backgrounds are welcome to register
                        </li>
                        <li>
                            Basic knowledge of computer networks and familiarity
                            with linux environment is required
                        </li>
                        <li>Apply now: *insert FORM link*</li>
                        <li>
                            Registration fee: 1000/- (covers kit, accommodation,
                            lunch)
                        </li>
                        <li>Registration deadline: 20 Jan 2025</li>
                        <li>
                            Limited seats available, shortlisted candidates will
                            be notified via email with payment instructions
                        </li>
                        <li>
                            Selected participants may also qualify for
                            internship opportunities in dept. of CSE, IIT
                            Hyderabad.
                        </li>
                    </ul>
                </aside>
            </section>

            <section id="footer"></section>
        </>
    );
}

export default App;
