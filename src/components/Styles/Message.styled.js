import styled from "styled-components";

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
