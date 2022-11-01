import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	ArrowToTop,
	ContactHeader,
	ContactLink,
	Copyright,
	FooterArrowLine,
	FooterBigLinkContainer,
	FooterContact,
	FooterContacts,
	FooterLine,
	FooterSmallTitle,
	FooterSmallTitleWrapper,
	FooterSocials,
	Small,
	StyledFooter
} from "../Styles/Footer.styled";
import ContactForm from "./ContactForm";

const toTop = () => {
	scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<StyledFooter>
			<FooterSmallTitleWrapper>
				<FooterSmallTitle>get in touch</FooterSmallTitle>
			</FooterSmallTitleWrapper>
			<FooterBigLinkContainer>
				<ContactForm />
			</FooterBigLinkContainer>
			<FooterContacts>
				<FooterContact>
					<ContactHeader>Call me</ContactHeader>
					<ContactLink href="tel:+576056463325">(+57) 605 6463325</ContactLink>
				</FooterContact>
				<FooterContact>
					<ContactHeader>Social</ContactHeader>{" "}
					<FooterSocials>
						<ContactLink
							href="https://github.com/GAPV-Coder"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</ContactLink>
						<ContactLink
							href="https://www.linkedin.com/in/gustavoadolfopereiravilla/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</ContactLink>
						<ContactLink
							href="https://twitter.com/Gustavo_PV90"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</ContactLink>
					</FooterSocials>
				</FooterContact>
				<FooterContact>
					<ContactHeader>Let's grab a coffee.</ContactHeader>
					<ContactLink href="tel:+576056463325">
						gapereira@outlook.es
					</ContactLink>
				</FooterContact>
			</FooterContacts>

			<FooterArrowLine>
				<FooterLine />
				<ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
			</FooterArrowLine>

			<Copyright>
				<small>
					&copy; Copyright {year},{" "}
					<Small
						href="https://github.com/GAPV-Coder"
						target="_blank"
						rel="noopener noreferrer"
					>
						Gustavo Pereira
					</Small>
				</small>
			</Copyright>
		</StyledFooter>
	);
};

export default Footer;
