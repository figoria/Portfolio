import {useNavigate, useParams} from "react-router-dom";
import { projects } from "./Projects.js";
import {SlowScroll} from "../slowScroll.jsx";

function Project() {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p>Project niet gevonden</p>;

    return (

        <div className="container">

            <nav className="navbar">
                <button onClick={() => navigate("/")}>
                    Home
                </button>
                <button onClick={() => SlowScroll("description", 1100)}>
                    beschrijving
                </button>
                <button onClick={() => SlowScroll("techniques", 1100)}>
                    technieken
                </button>
                <button onClick={() => SlowScroll("Imagery", 1100)}>
                    Beeldmateriaal
                </button>
            </nav>
            <h1>{project.title}</h1>
            <p id="description">{project.description}</p>
            <h2 id="techniques">Technieken</h2>
            <ul>
                {project.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <div id="Imagery">
                {project.video && (
                    <video controls width="600">
                        <source src={project.video} type="video/mp4"/>
                    </video>
                )}
                <img src={project.image} alt={project.title}/>
            </div>
        </div>
    );
}

export default Project;
