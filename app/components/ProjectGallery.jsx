import { projects } from "../image-data";
import ProjectTile from "./ProjectTile";

export default function ProjectGallery() {
    const projectList = projects.map((project) => {
        return <ProjectTile key={project.id} project={project}/>;
    });

    return (
        <div className="projects-page__gallery">
            {projectList}
        </div>
    ); 
}