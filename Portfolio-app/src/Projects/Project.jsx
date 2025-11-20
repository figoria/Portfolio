import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./Projects.js";
import { SlowScroll } from "../slowScroll.jsx";
import './project.css'
import github from "../assets/icons/github.png"

function Project() {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p>Project niet gevonden</p>;

    return (
        <div className="project-container">

            <nav className="project-navbar">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => SlowScroll("description", 1100)}>Opdracht</button>
                <button onClick={() => SlowScroll("imagery", 1100)}>Uitwerking</button>
                <button onClick={() => SlowScroll("link", 1100)}>link</button>
            </nav>

            <header className="hero">
                <h1>{project.title}</h1>
                <div className="hero-background">
                    <span className="shape shape1"></span>
                    <span className="shape shape2"></span>
                    <span className="shape shape3"></span>
                </div>
            </header>

            <div className="project-content">
                    <p id="description"> {project.description}</p>

                    <h2>Tools / technieken</h2>

                    <ul>
                        {project.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
            </div>

            <section id="imagery" className="project-section imagery-section">
                {project.video && (
                    <div className="project-video-wrapper">
                        <video controls>
                            <source src={project.video} type="video/mp4" />
                        </video>
                    </div>
                )}

                {project.image && (
                    <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} />
                    </div>
                )}
            </section>

                {project.links && (
                    <div className="project-links" id="link">
                        <h2>Bekijk de code</h2>
                        {project.links.map((link, index) =>(
                            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="project-link">
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}



        </div>
    );
}

export default Project;
