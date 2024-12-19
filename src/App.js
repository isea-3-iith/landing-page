import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import cse_building from "./assets/CSE-Building.jpg";
import iith_logo from "./assets/CSELogo.png";
import Pannel from "./Pannel/Pannel";

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
                    <article id="instrutor-names" className="instructors">
                        <h2
                            id="instructors-heading"
                            className="bg-black-highlight"
                        >
                            Instructors:
                        </h2>
                        <ul>
                            <li>Dr. Bheemarjuna Reddy Tamma</li>
                            <li>Dr. Maria Francis</li>
                            <li>Dr. Saurabh Kumar</li>
                            <li>Industry experts</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="bg-black-highlight">
                            What you will learn:
                        </h2>
                        <ul>
                            <li>Basics of network security and cryptography</li>
                            <li>
                                various attack types and vulnerabilities in
                                wireless networks
                            </li>
                            <li>
                                Wi-Fi security protocols (WPA/WPA2/WPA3) and
                                attacks on them
                            </li>
                            <li>
                                work with tools like Openssl,
                                wireshark,BurpSuite, aircrack-ng
                            </li>
                            <li>
                                Best Practices and applied case study on Malware
                                Analysis and Detection for Mobile Devices
                            </li>
                        </ul>
                    </article>
                </div>

                <Pannel></Pannel>
            </section>

            <section id="footer"></section>
        </>
    );
}

export default App;
