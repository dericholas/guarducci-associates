'use client'
import React, { useState, useCallback } from "react";
import ProjectGallery from "../../archive/ProjectGallery";
import { projects } from "../image-data";
import ImageSlider from "../components/image slider/ImageSlider";
import ProjectsList from "../../archive/ProjectsList";
import ProjectCard from "../../archive/ProjectCard";


const Projects = () => {

  const [currentProject, setCurrentProject] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState({active: true, index: 0})
  
  const openLightbox = (index) => {
    setCurrentProject(index);
    setViewerIsOpen(true);
  }
  const closeLightbox = () => {
    setViewerIsOpen(false);
  };
  
  const changeCard = ({active, index}) => {
    if (index === selectedProject.index) {
      return true
    }
    else {
      setSelectedProject({active: !!active, index: index})
    }
  }


  const pastProjects = projects.filter(project => !project.active )
  const activeProjects = projects.filter(project => !!project.active)
  // projects.forEach((project) => {
  //   !!project.active ? activeProjects.push(project) : pastProjects.push(project)
  // })

  return (
    <div className="projects-page">
      <h1 className="projects-page__title">Our Projects</h1>



      <div className="projects-container">

        
        <div className="__list">
          <h2>Active</h2>
          <ProjectsList projects={activeProjects} changeCard={changeCard} openLightbox={openLightbox} />
          {/* <ul>{activeProjects}</ul> */}

        </div>
        <div className="projects-container__list">
          <h2>Past</h2>
          <ProjectsList projects={pastProjects} openLightbox={openLightbox} />
          {/* <ul>{pastProjects}</ul> */}
        </div>
        <div className="projects-container__card">
          <ProjectCard 
          project={selectedProject.active ? activeProjects[selectedProject.index] : pastProjects[selectedProject.index]} 
          openLightbox={openLightbox} 
          />
        </div>
      </div>





      <ProjectGallery projects={projects} openLightbox={openLightbox} />
      {!!viewerIsOpen && <div className="overlay">
        <div 
          style={{
            maxWidth: "1200px",
            width: "100%",
            aspectRatio: "10 / 6",
            margin: "0 auto",
        }}>
          <ImageSlider imageUrls={projects[currentProject].photos} closeLightbox={closeLightbox} />
        </div>
      </div>}
    </div>
  );
}
export default Projects