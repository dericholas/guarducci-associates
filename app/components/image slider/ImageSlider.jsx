'useclient'
import { useState } from "react"
import "./image-slider.scss"

export default function ImageSlider({ imageUrls, closeLightbox }) {
    const [imageIndex, setImageIndex] = useState(0)

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    const showPrevImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }
    return(
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
            }}
        >
            <div 
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    overflow: "hidden"
                }}
            >
                {imageUrls.map(url =>  {
                    return (
                        <img
                            key={url}
                            src={url}
                            className="img-slider-img"
                            style={{ translate: `${-100 * imageIndex}%` }}
                            alt="Image"
                        />
                    )
                })}
            </div>
            <button 
                onClick={closeLightbox}
                className="img-slider-close-btn"
                style={{   
                    // top: 0,
                    // bottom: 'auto',
                    // left: '50%',
                    // transform: 'translateX(-50%)'
                }}
                aria-label="Close Image Slider"
            >
                <img src="/Symbols/close-circle.svg" aria-hidden />
            </button>
            <button 
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{ left: 0}}
                aria-label="View Previous Image"
            >
                <img src="/Symbols/arrow-circle-left.svg" aria-hidden />
            </button>
            <button 
                onClick={showNextImage}
                className="img-slider-btn"
                style={{ right: 0}}
                aria-label="View Next Image"
            >
                <img src="/Symbols/arrow-circle-right.svg" aria-hidden />
            </button>
            <div style={{
                position: "absolute",
                bottom: ".75rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem"
            }}>
                {imageUrls.map((_, index) => {
                    return (
                        <button
                            key={index}
                            className="img-slider-dot-btn"
                            onClick={() => setImageIndex(index)}
                            aria-label={`View Image ${index + 1}`}
                        >
                            {index === imageIndex ? <img src="Symbols/dot-fill.svg" aria-hidden /> : <img src="Symbols/dot-circle.svg" aria-hidden/>}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}