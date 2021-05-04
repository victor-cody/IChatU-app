import React from 'react';

const MyMessageBox = ({ message }) => {
	if (message.attachments && message.attachments.length > 0) {
		return (
			<img
				src={message.attachments[0].file}
				alt="message-attachment"
				className="message-image"
				style={{ float: 'right' }}
			/>
		)
	}
	return (
		<div className="chat">
			{/* <div className="chat-avatar">
				<span className="avatar box-shadow-1 cursor-pointer">
					<img
						src="../../../app-assets/images/portrait/small/avatar-s-11.jpg"
						alt="avatar"
						height="36"
						width="36"
					/>
				</span>
			</div> */}
			<div className="chat-body">
				<div className="chat-content">
					<p>{message.text}</p>
				</div>
			</div>
		</div>
	);
};

export default MyMessageBox;
