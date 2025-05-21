
export default function ProjectCard ({ project, openLightbox, index }) {
    const handleClick = (projectIndex) => {
        openLightbox(projectIndex)
    }
    return (
        <div className="projects-container__list__card" >
            <h6 onClick={() => changeCard({})}>{project.location}</h6>
            <img src={project.photos[0]} alt="thumbnail" onClick={() => handleClick(index)}/>
            <p>{project.description}</p>
        </div> 
    )
}