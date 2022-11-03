import React from "react";
import { StyledParagraph, StyledLink } from "../Styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../Styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../Styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

const Projects = () => {
	return (
		<StyledProjects id="projects">
			<SectionHeading>
				<SectionTitle number="01">Projects</SectionTitle>
			</SectionHeading>
			<StyledParagraph dark="true" textAlign="center">
				Here is a list of projects I have recently worked on to improve my
				skills and learn new technologies.{" "}
				<StyledLink
					href="https://github.com/GAPV-Coder"
					target="_blank"
					rel="noopener noreferrer"
				>
					Want to see more?
				</StyledLink>
			</StyledParagraph>
			<ProjectsContainer>
				{projectData.map(project => {
					return <ProjectCardComponent key={project.id} {...project} />;
				})}
			</ProjectsContainer>
		</StyledProjects>
	);
};

export default Projects;
