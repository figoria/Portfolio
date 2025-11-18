import { useParams } from "react-router-dom";
import { projects } from "./Projects.js";

function Project() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return <p>Project niet gevonden</p>;

    return (
        <div>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <ul>
                {project.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Project;
