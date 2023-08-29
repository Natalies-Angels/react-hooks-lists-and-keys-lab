import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>    
        {projects.map(project => (
         <ProjectItem key={project.id} project={projects} technologies={project.technologies}/>//I have mapped over the `projects` array and passed each project to the ProjectItem component
        ))}
    </div>
  );
}

export default ProjectList;
