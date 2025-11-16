import { useState } from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";
import foto from "./assets/images/foto.png"


function App() {
    const navigate = useNavigate();


    return (
        <div className="container">

            <nav className="navbar">
                <button>Home</button>
                <button>Over mij</button>
                <button>Projecten</button>
                <button onClick={() =>
                    document.getElementById("contact").scrollIntoView({behavior: "smooth"})
                }>Contact</button>
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <h1 className="name">Sam<br />Bijkerk</h1>
                    <p className="subtitle">Creative developer</p>
                </div>

                <img src={foto} alt="foto van Sam" className="hero-img"/>
            </section>

            <section className="about" id="about">
                <h2>Hello world</h2>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                </p>
            </section>

            <section className="projects" id="projects">
                <div className="project project1"></div>
                <div className="project project2"></div>
                <div className="project project3"></div>
                <div className="project project4"></div>
            </section>

            <section className="contact" id="contact">
                <h2>Contact</h2>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat."
                </p>

                <div className="socials">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </section>

        </div>
    );
}

export default App
