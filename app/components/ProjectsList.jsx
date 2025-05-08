import ProjectCard from "./ProjectCard";

export default function ProjectsList ({ projects, openLightbox }) {
    const projectList = projects.map((project, index) => {
        return <ProjectCard key={project.id} index={index} project={project} openLightbox={openLightbox}/>
    })
    return (
        <div className="projects-container__list">
            {projectList}
        </div>
    )
}