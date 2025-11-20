import './App.css'
import foto from "./assets/images/foto.png"
import {useNavigate} from "react-router-dom";
import {SlowScroll} from "./slowScroll.jsx";
import CV from "./assets/images/Curriculum Vitae.png"
import pdfUrl from "./assets/docs/Curriculum Vitae -Sam Bijkerk.pdf"
import instagram from "./assets/icons/instagram.png"
import linkedin from "./assets/icons/linkedin.png"
import mail from "./assets/icons/mail.png"
import github from "./assets/icons/github.png"




function App() {
    const navigate = useNavigate();

    return (
        <div className="container">

            <nav className="navbar">
                <button onClick={() => SlowScroll("hero", 1100)}>
                    Home
                </button>
                <button onClick={() => SlowScroll("about", 1100)}>
                    Over mij
                </button>
                <button onClick={() => SlowScroll("projects", 1100)}>
                    Projecten
                </button>
                <button onClick={() => SlowScroll("contact", 1100)}>
                    Contact
                </button>
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <h1 className="name">Sam<br/>Bijkerk</h1>
                    <p className="subtitle">Creative developer</p>
                </div>
                <div className="hero-background">
                    <span className="shape shape1"></span>
                    <span className="shape shape2"></span>
                    <span className="shape shape3"></span>
                    <span className="shape shape4"></span>
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Hello world</h2>
                        <p> "Mijn naam is Sam Bijkerk. Ik ben 21 jaar en woon in Krimpen aan de Lek. Ik studeer Creative Media and Game Technologies, waar ik ervaring opdoe met zowel programmeren als ontwerpen.
                            Mijn interesses liggen vooral bij frontend development, werken met 3D en het toepassen van AI in creatieve projecten."
                        </p>
                    </div>
                    <img src={foto} alt="foto van Sam" className="about-img"/>
                </div>
            </section>

            <section className="projects" id="projects">
                <div className="project project1" onClick={() => navigate("/project/1")}>
                    <h3> Huiswerk weekplanner</h3>
                </div>
                <div className="project project2" onClick={() => navigate("/project/2")}>
                    <h3> Digitale maquette</h3>
                </div>
                <div className="project project3" onClick={() => navigate("/project/3")}>
                    <h3> Full Stack</h3>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="cv-en-iconen-container">
                    <a className="document" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        <img src={CV} alt="PDF preview" style={{ width: "150px", cursor: "pointer", display: "block" }} />
                    </a>
                    <div className="socials">
                        <a href="mailto:sambijkerk@gmail.com">
                            <img className="icon" src={mail} alt="gmail icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/sam-bijkerk/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={linkedin} alt="linkedin icon"/>
                        </a>
                        <a href="https://github.com/figoria" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={github} alt="github icon"/>
                        </a>
                        <a href="https://www.instagram.com/sambijkerk2004/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={instagram} alt="instagram icon"/>
                        </a>
                    </div>
                </div>
            </section>

        </div>
);
}

export default App;
