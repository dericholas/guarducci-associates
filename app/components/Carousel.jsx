
export default function Carousel({project}) {
    carouselTiles = project.photos.map((photo) => {
        return (
            <img src={photo}/>
        )
    })
    return (
        <div className="carousel-container">
            {project.photos.map((photo, index) => {
                return (
                        <img src={photo} className="carousel-container__items" key={index}/>
                    
                )
            })}
            
        </div>
    )
}