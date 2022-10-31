import React from "react";
import {
	AboutContent,
	AboutDetailsContainer,
	AboutImage,
	AboutImageContainer,
	Resume,
	ResumeLink,
	StyledAbout
} from "../Styles/About.styled";
import { SectionHeading, SectionTitle } from "../Styles/SectionHeading";
import { StyledParagraph } from "../Styles/Typography.styled";
import myImage from "../../assets/general/perfil.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/general/resume.pdf";

const About = () => {
	return (
		<StyledAbout id="about">
			<SectionHeading dark="true" mb="3rem">
				<SectionTitle dark="true" number="02">
					About Me
				</SectionTitle>
			</SectionHeading>
			<AboutContent>
				<AboutImageContainer>
					<AboutImage src={myImage} />
				</AboutImageContainer>
				<AboutDetailsContainer>
					<StyledParagraph>
						My name is Gustavo Pereira and I am a Full Stack Developer. I'm
						passionate about writing code and solving problems, for me it's fun
						to do it and I find vocation in it. I am an achievement oriented
						professional with particular attention to information analysis. I
						love my profession and therefore I like to learn constantly and face
						different challenges that involve leaving my comfort zone, I am
						based in Colombia.
					</StyledParagraph>
					<StyledParagraph>
						I can perform in positions such as Front-End developer, Back-End
						developer or Full Stack developer, I currently develop under MERN
						Stack standards and I have also developed with Python and Django. In
						the present and future I want to continue expanding my knowledge
						because through it, I have been able to and will continue fulfilling
						my dreams, goals and objectives both professional and personal.
					</StyledParagraph>
					<StyledParagraph>
						If you got to the end of this brief summary about my profile, I hope
						you have a good impression about me and I want you to know that I am
						available to meet any challenge you want to pose me, if so do not
						hesitate to contact me.
					</StyledParagraph>
					<Resume>
						<ResumeLink
							href={resume}
							icon={downloadIcon}
							download="resume-gustavo-pereira"
						>
							Download Resume
						</ResumeLink>
					</Resume>
					{/* <br />
					<br /> */}
				</AboutDetailsContainer>
			</AboutContent>
			<AboutContent>
				<AboutDetailsContainer>
					<h1>ACADEMIC HISTORY</h1>
					<br />
					<StyledParagraph>
						<h2>Academlo</h2>
						<h3>Full Stack Web Development and Computer Science 2020 - 2021</h3>
						<br />
						Coding bootcamp with 5 modules focused on: HTML, CSS, the
						fundamentals of JavaScript. React with Hooks, React Router and
						Redux, Python with Django and Node.js, SQL databases, Data
						Structures and Algorithms, Computer Architecture and Server
						Administration, AWS, Gcloud.
					</StyledParagraph>
					<StyledParagraph>
						<h2>Edutin Academy</h2>
						<h3>English Program - B1</h3>
					</StyledParagraph>
				</AboutDetailsContainer>
				<AboutDetailsContainer>
					<h1>WORK EXPERIENCE</h1>
					<br />
					<StyledParagraph>
						<h2>BITPoint LATAM</h2>
						<h3>Full Stack Developer</h3>
						January 2022 - July 2022
					</StyledParagraph>
					<StyledParagraph>
						<h2>Kiero International Group</h2>
						<h3>Front-End Developer</h3>
						June 2021 - August 2021
					</StyledParagraph>
					<StyledParagraph>
						<h2>Freelance Developer</h2>
						<h3>Front-End Developer</h3>
						May 2020 - December 2021
					</StyledParagraph>
				</AboutDetailsContainer>
			</AboutContent>
		</StyledAbout>
	);
};

export default About;
