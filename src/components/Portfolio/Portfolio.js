import React from "react";
import {
	PlaygroundProjectContainer,
	StyledPlayground
} from "../Styles/Portfolio.styled";
import { SectionHeading, SectionTitle } from "../Styles/SectionHeading";
import { StyledParagraph } from "../Styles/Typography.styled";
import PortfolioProjects from "./PortfolioProjects";
import { projectsData } from "./Data";

const Portfolio = () => {
	return (
		<StyledPlayground id="playground">
			<SectionHeading>
				<SectionTitle number="03">Portfolio</SectionTitle>
			</SectionHeading>
			<StyledParagraph dark="true" textAlign="center">
				Collection of projects that I have developed professionally for
				Colombian companies.
			</StyledParagraph>
			<PlaygroundProjectContainer>
				{projectsData.map(project => {
					return <PortfolioProjects key={project.id} {...project} />;
				})}
			</PlaygroundProjectContainer>
		</StyledPlayground>
	);
};

export default Portfolio;
