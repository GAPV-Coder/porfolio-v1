import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import {
	FadeAnimation,
	LinkName,
	ProjectCard,
	ProjectCodeLink,
	ProjectDetails,
	ProjectImage,
	ProjectLiveLink,
	ProjectTitle,
	ProjectTransitionImage
} from "../Styles/Projects.styled";

const ProjectCardComponent = ({
	image,
	transitionImage,
	title,
	codeLink,
	liveLink
}) => {
	return (
		<>
			<IconContext.Provider value={{ size: "1rem" }}>
				<FadeAnimation>
					<ProjectCard>
						<ProjectImage src={image} alt={title} />
						<ProjectTransitionImage src={transitionImage} alt={title} />
						<ProjectDetails>
							<ProjectTitle>{title}</ProjectTitle>
							<ProjectCodeLink
								href={codeLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<GoMarkGithub />
								<LinkName>Github Code</LinkName>
							</ProjectCodeLink>
							<ProjectLiveLink
								href={liveLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<BiLinkExternal />
								<LinkName>Live</LinkName>
							</ProjectLiveLink>
						</ProjectDetails>
					</ProjectCard>
				</FadeAnimation>
			</IconContext.Provider>
		</>
	);
};

export default ProjectCardComponent;
