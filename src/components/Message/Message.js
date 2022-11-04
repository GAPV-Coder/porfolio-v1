import React from "react";
import { StyledMessage } from "../Styles/Message.styled";

const Message = ({ msg }) => {
	return (
		<StyledMessage>
			<p dangerouslySetInnerHTML={{ __html: msg }} />
		</StyledMessage>
	);
};

export default Message;
