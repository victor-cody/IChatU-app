// import { Button, Empty } from 'antd';
import TheirMessageBox from '../message/TheirMessageBox';
import MyMessageBox from '../message/MyMessageBox';
import MessageForm from '../message-form/MessageForm';

import {useHistory } from "react-router-dom";

const ChatFeed = (props) => {
	console.log(props);
	const { chats, activeChat, userName, messages } = props;

	const history = useHistory()

	if(!localStorage.getItem('username'))history.push('/login')
	;

	const chat = chats && chats[activeChat];

	const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
		<div
			key={`read_${index}`}
			className="read-receipt"
			style={{
				float: isMyMessage ? 'right' : 'left',
				backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
			}}
		/>
	));

	const renderMessages = () => {
		const keys = Object.keys(messages);

		return keys.map((key, index) => {
			const message = messages[key];
			const lastMessageKey = index === 0 ? null : keys[index - 1];
			const isMyMessage = userName === message.sender.username;

			return (
				<div key={`msg_${index}`} style={{ width: '100%' }}>
					<div className="message-block">
						{isMyMessage
							? <MyMessageBox message={message} />
							: <TheirMessageBox message={message} lastMessage={messages[lastMessageKey]} />}
					</div>
					<div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
						{renderReadReceipts(message, isMyMessage)}
					</div>
				</div>
			);
		});
	};

	if (!chat) return <div />;

	return (
		<div className="chat-feed">
			<div className="chat-title-container">
				<div className="chat-title">{chat?.title}</div>
				<div className="chat-subtitle">
					{chat.people.map((person) => ` ${person.person.username}`)}
				</div>
			</div>
			{renderMessages()}
			<div style={{ height: '100px' }} />
			<div className="message-form-container">
				<MessageForm {...props} chatId={activeChat} />
			</div>
		</div>
	);
};

export default ChatFeed;
