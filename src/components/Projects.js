
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import ProjectsData from "../data/ProjectsData";
import "../styles/component.css";
import "../styles/project-card.css";

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const [allProjects] = useState(ProjectsData);

    const loadMoreProjects = () => {
        setVisibleProjects(visibleProjects + 4);
    };

    const loadLessProjects = () => {
        setVisibleProjects(visibleProjects - 4);
    };

    return (
        <div className="component-container" id="project">
            <h1>Explore My Projects!</h1>

            <p>
                Take a tour through the projects I've meticulously designed and
                developed.{" "}
                <span style={{ backgroundColor: "var(--primary-color)" }}>:)</span>{" "}
            </p>

            <div className="container-projects">
                {allProjects.slice(0, visibleProjects).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="button-container">
                {visibleProjects < allProjects.length && (
                    <Button buttonName={"Load More"} onClickFunction={loadMoreProjects} />
                )}

                {visibleProjects > 4 && (
                    <Button buttonName={"Load Less"} onClickFunction={loadLessProjects} />
                )}
            </div>
        </div>
    );
};

export default Projects;
