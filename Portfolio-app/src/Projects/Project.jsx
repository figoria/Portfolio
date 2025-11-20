import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./Projects.js";
import { SlowScroll } from "../slowScroll.jsx";
import './project.css'

function Project() {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p>Project niet gevonden</p>;

    return (
        <div className="project-container">

            {/* NAVIGATION */}
            <nav className="project-navbar">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => SlowScroll("description", 1100)}>Opdracht</button>
                <button onClick={() => SlowScroll("techniques", 1100)}>Tools</button>
                <button onClick={() => SlowScroll("imagery", 1100)}>Uitwerking</button>
            </nav>

            {/* TITLE */}
            <header className="project-header">
                <h1>{project.title}</h1>
            </header>

            {/* DESCRIPTION */}
            <section id="description" className="project-section description-section">
                <p>{project.description}</p>
            </section>

            {/* SKILLS */}
            <section id="techniques" className="project-section techniques-section">
                <h2>Tools / technieken</h2>
                <ul>
                    {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/* IMAGERY AREA */}
            <section id="imagery" className="project-section imagery-section">

                {/* VIDEO BLOCK (only if exists) */}
                {project.video && (
                    <div className="project-video-wrapper">
                        <video controls>
                            <source src={project.video} type="video/mp4" />
                        </video>
                    </div>
                )}

                {/* IMAGE BLOCK (only if exists) */}
                {project.image && (
                    <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} />
                    </div>
                )}

                {/* GITHUB (optional) */}
                {project.link && (
                    <div className="github-link">
                        <p>Link naar project</p>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                )}

            </section>

        </div>
    );
}

export default Project;
