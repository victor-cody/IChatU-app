import React from 'react';
import TheirMessageBox from '../message/TheirMassageBox';
import MyMessageBox from '../message/MyMassageBox';

const RenderMessage = ({ messages, userName }) => {
	const keys = Object.keys(messages);

	return keys.map((key, index) => {
		const message = messages[key];
		const isLastMessage = index === 0 ? null : messages[index - 1];
		const isMyMessage = userName === message.sender.username;

		return (
			<div key={`msg_${index}`} style={{ width: '100%' }}>
				{
					isMyMessage
						?
						<MyMessageBox message={message} />
						:
						<TheirMessageBox message={message} lastMessage={isLastMessage} />
				}
				<div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
					{'this is' + isLastMessage}
				</div>
			</div>
		)
	})
};

export default RenderMessage;
