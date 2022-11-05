import React from "react";
import { FadeInAnimation, StyledMessage } from "../Styles/Message.styled";

const Message = ({ msg }) => {
	return (
		<FadeInAnimation>
			<StyledMessage>
				<p dangerouslySetInnerHTML={{ __html: msg }} />
			</StyledMessage>
		</FadeInAnimation>
	);
};

export default Message;
