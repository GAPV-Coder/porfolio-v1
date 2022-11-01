import React from "react";
import { useForm } from "../../Hooks/useForm";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { StyledParagraph } from "../Styles/Typography.styled";

const initialForm = {
	name: "",
	email: "",
	subject: "",
	message: ""
};

const validationsForm = form => {
	let errors = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexMessage = /^.{1,255}$/;

	if (!form.name.trim()) {
		errors.name = "The 'Name' field is required";
	} else if (!regexName.test(form.name.trim())) {
		errors.name = "The 'Name' field only accepts letters and blanks";
	}

	if (!form.email.trim()) {
		errors.email = "The 'Email' field is required";
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = "The 'Email' field is incorrect";
	}

	if (!form.subject.trim()) {
		errors.subject = "The 'Subject' field is required";
	}

	if (!form.message.trim()) {
		errors.message = "The 'Comments' field is required";
	} else if (!regexMessage.test(form.message.trim())) {
		errors.message = "Comments' field must not exceed 255 characters";
	}

	return errors;
};

let styles = {
	fontWeight: "bold",
	color: "rgb(230, 78, 4)"
};

const ContactForm = () => {
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit
	} = useForm(initialForm, validationsForm);

	return (
		<>
			<StyledParagraph>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={form.name}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{errors.name && <p style={styles}>{errors.name}</p>}
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{errors.email && <p style={styles}>{errors.email}</p>}
					<input
						type="text"
						name="subject"
						placeholder="Subjec"
						value={form.subject}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					/>
					{errors.subject && <p style={styles}>{errors.subject}</p>}
					<textarea
						name="message"
						cols="50"
						rows="5"
						placeholder="Message..."
						value={form.message}
						onChange={handleChange}
						onBlur={handleBlur}
						required
					></textarea>
					{errors.message && <p style={styles}>{errors.message}</p>}
					<input type="submit" value="Send" />
				</form>
			</StyledParagraph>
			{loading && <Loader />}
			{response && (
				<Message msg="Your message has been sent" bgColor="#e64e04" />
			)}
		</>
	);
};

export default ContactForm;
