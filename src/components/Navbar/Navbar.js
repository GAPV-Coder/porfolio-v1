import React, { useState } from "react";
import {
	Line,
	Menu,
	NavList,
	NavLogo,
	NavMenuList,
	StyledCTA,
	StyledNavbar,
	StyledNavLinks
} from "../Styles/Navbar.styled";
import logo from "../../assets/general/logo-2.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	const [stickyNav, setStickyNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const StickyNavFunction = () => {
		if (window.scrollY >= 510) {
			setStickyNav(true);
		} else {
			setStickyNav(false);
		}
	};

	window.addEventListener("scroll", StickyNavFunction);

	const ToTop = () => {
		scroll.scrollToTop({ delay: 0, duration: 0 });
	};

	const MobileToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<StyledNavbar className={stickyNav ? "sticky" : ""}>
			<div>
				<NavLogo to="/" onClick={ToTop} src={logo} alt="logo" />
			</div>
			<NavMenuList>
				<NavList>
					<StyledNavLinks
						to="home"
						smooth={true}
						duration={0}
						delay={0}
						spy={true}
						spyThrottle={0}
						exact="true"
						offset={-85.26}
					>
						Home
					</StyledNavLinks>
				</NavList>
				<NavList>
					<StyledNavLinks
						to="projects"
						smooth={true}
						duration={0}
						delay={0}
						spy={true}
						spyThrottle={0}
						exact="true"
						offset={-85.26}
					>
						Projects
					</StyledNavLinks>
				</NavList>
				<NavList>
					<StyledNavLinks
						to="about"
						smooth={true}
						duration={0}
						delay={0}
						spy={true}
						spyThrottle={0}
						exact="true"
						offset={-85.26}
					>
						About
					</StyledNavLinks>
				</NavList>
				<NavList>
					<StyledNavLinks
						to="playground"
						smooth={true}
						duration={0}
						delay={0}
						spy={true}
						spyThrottle={0}
						exact="true"
						offset={-85.26}
					>
						Portfolio
					</StyledNavLinks>
				</NavList>
			</NavMenuList>
			<StyledCTA
				href="mailto:gapereira@outlook.es "
				target="_blank"
				rel="noreferrer"
			>
				<span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="#fff"
						>
							<path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
						</svg>
						get in touch
					</span>
				</span>
			</StyledCTA>
			<Menu onClick={MobileToggle}>
				<Line width="1.5rem" />
				<Line />
				<Line width="1.5rem" ml="0.5rem" />
			</Menu>
		</StyledNavbar>
	);
};

export default Navbar;
