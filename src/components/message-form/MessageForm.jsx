import React, { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
	const [value, setValue] = useState('')
	const { chatId, creds } = props;

	const enterChat = (e) => {
		e.preventdefault();
		const text = value.trim();
		if (text.length > 0) sendMessage(creds, chatId, { text })
		setValue('')
	}

	const handelChange = (e) => {
		setValue(e.target.value);
		isTyping(props, chatId)
	}

	const handelUpload = (e) => {
		e.preventdefault();
		sendMessage(creds, chatId, { files: e.target.files, text: '' });
	}

	return (
		<form className="chat-app-form" action="#" onsubmit={enterChat}>
			<div className="input-group input-group-merge mr-1 form-send-message">
				{/* <div className="input-group-prepend">
						<span className="speech-to-text input-group-text"><i data-feather="mic" className="cursor-pointer"></i></span>
					</div> */}
				<input type="text" className="form-control message"
					placeholder="Type your message or use speech to text"
					aria-label='çhat message box'
					value={value}
					onChange={handelChange} />

				<div className="input-group-append">
					<span className="input-group-text">
						<label htmlFor="attach-doc" className="attachment-icon mb-0">
							<PictureOutlined className="cursor-pointer lighten-2 text-secondary" />
							<input type="file" id="attach-doc" hidden
								onChange={handelUpload}
							/> </label
						></span>
				</div>

			</div>
			<button type="submit" className="btn btn-primary send" onclick={enterChat}>
				<SendOutlined className="d-lg-none" />
				<span className="d-none d-lg-block">Send</span>
			</button>
		</form>
	);
};

export default MessageForm;
