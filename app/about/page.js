'use client'

import { useState } from "react";

const About = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(null)
  const [selectedValueBody, setSelectedValueBody] = useState("")
  const valueData = [
    {
      title: "Integrity",
      body: "We are honest with ourselves and our clients. We represent our thinking and our process with clarity and honesty. We are prepared to decline work when we believe it is inconsistent with our values. We work to keep this value alive in our culture at all costs."
    },
    {
      title: "Self-Critical",
      body: "We believe in “the Crit.” The best design studios invite a constant stream of criticism which often leads to breakthrough innovative designs. We can learn from them. We embrace a sound argument and are willing to test all premises to get there."
    },
    {
      title: "Courage",
      body: "We speak up, especially when we are the only dissenting voice in the room. We especially value clients who give us permission to be courageous. We believe the best work is done when we are courageous together."
    },
    {
      title: "Humility",
      body: "We prize confidence and grace under fire, but we do not tolerate arrogance. Arrogance keeps us from personal and professional growth. And limits our ability to think the impossible for our clients. Humility frees us up to consider solutions that lie outside of our comfort zone."
    },
    {
      title: "Curiosity",
      body: "We are excited to learn about our clients’ business, their issues, their challenges, and the direct and indirect forces that can have a meaningful impact on their success. We tap into the social sciences – psychology, philosophy, sociology, political science, and economics — to nourish our thinking and sharpen our insights."
    },
    {
      title: "Collaboration",
      body: "We depend on each other to provide the best thinking. We encourage our colleagues to be inquisitive and challenging and help us pivot away from fruitless journeys."
    },
    {
      title: "Respect For Difference",
      body: "We embrace and celebrate difference. We depend on different and sometimes clashing world views to provide the most useful and creative work for our clients. We work everyday to create an environment where creative friction sparks competing ideas."
    }
  ]
  const clearSelected = () => {
    setCurrentValueIndex(null) 
    setSelectedValueBody(null)
  }
  const handleClick = (index) => {
    if(currentValueIndex === index) {
      setCurrentValueIndex(null)
      setSelectedValueBody("")
    } else {
      setCurrentValueIndex(index)
      setSelectedValueBody(valueData[index].body)
    }
  }
  // const valueTiles = valueData.map((value, index) => {
  //   return (
  //     <li 
  //       key={index}
  //       onClick={() => handleClick(index)}
  //       style={{color: index === currentValueIndex ? "blue" : "white"}}
  //       className="value-item"
  //     >
  //       <h5 className="value-name">{value.title}</h5>
  //       <div className="text-container">
  //         <p className="selected-value-body">{index === currentValueIndex ? value.body : null }</p>
  //       </div>
  //     </li>
  //   )
  // })
  const valueTiles = valueData.map((value, index) => {
    return (
      <h5 
        key={index}
        onClick={() => handleClick(index)}
        style={{color: index === currentValueIndex ? "blue" : "white"}}
        className="value-name"
      >
        {value.title}
      </h5>
    )
  })
    return (
      <div className="about">
        <h1 className="page-header">About Us</h1>
        <div className="about-bio">
          <h3 className="bio-header">
            Empowering Preservation-<br/>Our Commitment to 
            Stained Glass Artistry and Cultural Heritage
          </h3>
          <p className="bio-text">
            At our core, our mission is to safeguard and 
            celebrate the intricate beauty of stained glass 
            artistry. We strive to preserve cultural heritage 
            by meticulously restoring historical pieces to 
            their former glory. Through a fusion of traditional 
            craftsmanship and innovative techniques, we aim to 
            honor the legacy of stained glass while providing 
            our clients with timeless treasures that inspire 
            awe and appreciation.
          </p>
        </div>
        <div className="about-values">
          <h3 className="values-bio">
            Our shared values influence the work we do, and 
            the impact we hope to achieve.
          </h3>
          <div className="values-container">
            <ul className="value-list">
              {valueTiles}
            </ul>
            <p className="selected-value-body"> {selectedValueBody} </p>
          </div>

        </div>
        

      </div>
    );
}

export default About;