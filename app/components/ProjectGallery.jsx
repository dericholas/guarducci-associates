import { projects } from "../image-data";
import ProjectTile from "./ProjectTile";

export default function ProjectGallery({ projects, openLightbox }) {
    const projectList = projects.map((project, index) => {
        return <ProjectTile key={project.id} index={index} project={project} openLightbox={openLightbox}/>;
    });

    return (
        <div className="projects-page__gallery">
            {projectList}
        </div>
    ); 
}