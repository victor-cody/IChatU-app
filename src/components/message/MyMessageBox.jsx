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
		);
	}

	return (
		<div className="message my-message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#007bff' }}>
			{message.text}
		</div>
	);
};

export default MyMessageBox;
