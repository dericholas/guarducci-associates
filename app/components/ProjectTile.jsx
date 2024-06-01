export default function ProjectTile({ project }) {
    console.log(project.photos)
    return (
        <div className="projects-page__gallery__tile">
            <p className="projects-page__gallery__tile__title">{project.location}</p>
            <img
                src={project.photos[0]}
                alt="thumbnail"
                className="projects-page__gallery__tile__thumbnail"
            />
            <p className="projects-page__gallery__tile__description">{project.description}</p>
        </div>
    );
}