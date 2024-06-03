'use client'
import React, { useState } from "react";

const ServicesPage = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null)
    const [selectedStepBody, setSelectedStepBody] = useState("")
    const restorationSteps = [
        {
            title: "Conservation",
            body: "Each restoration project is carefully planned and executed, involving the stabilization, then removal of the stained glass for off-site work to allow for detailed conservation efforts. We ensure that vacant openings are securely covered during the restoration process to protect the surrounding environment."
        },
        {
            title: "Disassembly",
            body: "Off-site work begins with disassembly through careful removal of the old lead work. Each piece of glass is then meticulously cleaned to assist with identifying cracks or breaks, and maintaining the original colors upon reinstallation"
        },
        {
            title: "Choosing the right professional",
            body: "Selecting the right professional for your stained glass restoration is crucial. At [Your Company Name], we invite you to explore our portfolio of past projects, speak with our team, and request references to understand our commitment to quality, craftsmanship, and customer satisfaction. We are proud members of the Stained Glass Association and adhere to the highest standards of conservation and restoration."
        },
        {
            title: "Releading",
            body: "Replacing the cames (metal strips) that hold the glass together, ensuring structural integrity."
        },
        {
            title: "Maintenance and Preservation",
            body: "Beyond restoration, we also offer guidance on the maintenance and preservation of stained glass. Regular care and proper repair can significantly extend the life of your stained glass, preventing the need for costly repairs in the future."
        }
    ]
    const clearSelected = () => {
      setCurrentStepIndex(null) 
      setSelectedStepBody("")
    }
    const handleClick = (index) => {
      if(currentStepIndex === index) {
        clearSelected()
      } else {
        setCurrentStepIndex(index)
        setSelectedStepBody(restorationSteps[index].body)
      }
    }
    const stepTiles = restorationSteps.map((step, index) => {
        return (
            <li key={index}
            onClick={() => handleClick(index)}
            style={{color: index === currentStepIndex ? "blue" : "white"}}
            className="restoration-steps__list__item"
            >
                <h4 className="restoration-steps__list__item__title">{step.title}</h4>
            </li>
        )
    })
    const mobileStepTiles = restorationSteps.map((step, index) => {
        return (
            <li key={index}
            onClick={() => handleClick(index)}
            style={{color: index === currentStepIndex ? "blue" : "white"}}
            className="restoration-steps__mobile-list__item"
            >
                <h4 className="restoration-steps__mobile-list__item__title"
                >{step.title}</h4>
                {index === currentStepIndex ? <p className="restoration-steps__mobile-list__item__body">{step.body}</p> : null}
            </li>
        )
    })

    return (
        <div className="services">
            <h1>Our Services</h1>
            
            <p>At Guarducci Associates, we specialize in the meticulous restoration of stained glass windows, ensuring they retain their beauty and historical significance for generations to come. Our team of skilled artisans combines traditional techniques with modern conservation practices to restore stained glass to its original glory.</p>
            
            <h3>Comprehensive Assessment and Documentation</h3>
            <p>Before beginning any restoration project, our experts conduct a thorough assessment of the stained glass, including historical research, detailed measurements, and comprehensive photography. This meticulous documentation ensures that every aspect of the restoration process is informed by accurate and detailed information, allowing us to make the best possible decisions for preserving the integrity of the stained glass.</p>
        
            <h3>Insurance and Protection</h3>
            <p>We offer comprehensive insurance coverage for all aspects of the restoration process, including transportation and installation. This ensures that you are protected against any potential damages that may occur during the restoration of your stained glass.</p>
            
            <h3>Restoration Process</h3>
            <h6>Our restoration process is designed to address both minor and significant issues with stained glass. This includes:</h6>

            <div className="restoration-steps">
            <ul className="restoration-steps__mobile-list">{mobileStepTiles}</ul>
            <ul className="restoration-steps__list">{stepTiles}</ul>
            <p className="restoration-steps__list__item__body">{selectedStepBody}</p>
            </div>
            
            <h4>Still Have Questions?</h4>
            <p>To learn more about our stained glass restoration services or to discuss your project, please contact us today. We look forward to helping you preserve and celebrate the beauty of stained glass in your community.</p>
        
        
        </div>
    );
}

export default ServicesPage;