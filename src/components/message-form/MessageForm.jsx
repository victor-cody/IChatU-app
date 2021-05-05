import React, { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
	const [value, setValue] = useState('')
	const { chatID, creds } = props;

	const enterChat = (e) => {
		e.preventDefault();
		const text = value.trim();
		if (text.length > 0) {
			sendMessage(creds, chatID, { text });
		}
		setValue('')
	}

	const handelChange = (e) => {
		setValue(e.target.value);
		isTyping(props, chatID)
	}

	const handelUpload = (e) => {
		sendMessage(creds, chatID, { files: e.target.files, text: '' });
	}

	return (
		<form className="message-form" onSubmit={enterChat}>
			<input
				className="message-input"
				placeholder="Send a message..."
				value={value}
				onChange={handelChange}
				// onSubmit={enterChat}
			/>
			<label htmlFor="upload-button">
				<span className="image-button">
					<PictureOutlined className="picture-icon" />
				</span>
			</label>
			<input
				type="file"
				multiple={false}
				id="upload-button"
				style={{ display: 'none' }}
				onChange={handelUpload.bind(this)}
			/>

			<button type="submit" className="btn btn-primary send-button" onclick={enterChat}>
				<SendOutlined className="d-lg-none" />
				<span className="d-none d-lg-block">Send</span>
			</button>
		</form>
	);
};

export default MessageForm;
