import React from "react";
import {
	TechnologiesContainer,
	TechnologiesHeader,
	TechnologiesIcons,
	TechnologyIcon
} from "../Styles/Technologies.styled";
import { iconsData } from "./Icons";

const Technologies = () => {
	return (
		<TechnologiesContainer>
			<TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

			<TechnologiesIcons>
				{iconsData.map(iconData => {
					return (
						<TechnologyIcon
							key={iconData.id}
							src={iconData.icon}
							alt={iconData.name}
							title={iconData.name}
							{...iconData}
						/>
					);
				})}
			</TechnologiesIcons>
		</TechnologiesContainer>
	);
};

export default Technologies;
