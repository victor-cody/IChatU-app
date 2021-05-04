import React from 'react';

import ReadReceipts from './ReadReceipts';
import TheirMessageBox from '../message/TheirMessageBox';
import MyMessageBox from '../message/MyMessageBox';

const RenderMessage = ({ chat, messages, userName }) => {
	const appChats = chat;
	const keys = Object.keys(messages);

	return keys.map((key, index) => {
		const message = messages[key];
		const LastMessage = index === 0 ? null : messages[index - 1];
		const isMyMessage = userName === message.sender.username;

		return (
			<div key={`msg_${index}`} style={{ width: '100%' }}>
				{
					isMyMessage
						?
						<MyMessageBox message={message} />
						:
						<TheirMessageBox message={message} lastMessage={messages[LastMessage]} />
				}
				<div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
					<ReadReceipts chat={appChats} message={message} isMyMessage={isMyMessage} />
				</div>
			</div>
		)
	})
};

export default RenderMessage;
