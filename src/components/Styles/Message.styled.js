import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export const FadeAnimation = keyframes`${fadeIn}`;

export const FadeInAnimation = styled.div`
	animation: 1.5s ${FadeAnimation};
`;

export const StyledMessage = styled.nav`
	padding: 1rem;
	margin-bottom: 1rem;
	text-align: center;
	color: #fff;
	font-weight: bold;
	background-color: ${({ theme }) => theme.backgroundColor.orange};
	width: 500px;
	margin: auto;
	border-radius: 2px;
	@media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
		width: 18rem;
		margin: 0;
	}
`;
