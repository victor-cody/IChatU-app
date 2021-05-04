import React from 'react';

import { Button, Empty } from 'antd';
import TheirMessageBox from '../message/TheirMessageBox';
import MyMessageBox from '../message/MyMessageBox';
import MessageForm from '../message-form/MessageForm';


const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props;

	const chat = chats && chats[activeChat];

	const ReadReceipts = ({ message, isMyMessage }) =>

		chat.people.map((person, index) =>
			person.last_read === message.id && (
				<div
					key={`read_${index}`}
					className="read-receipt"
					style={{
						float: isMyMessage ? 'right' : 'left',
						backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
					}}
				/>
			)

		)
		;

	const RenderMessage = ({ messages, userName }) => {
		const keys = Object.keys(messages);

		return keys.map((key, index) => {
			const message = messages[key];
			const LastMessage = index === 0 ? null : messages[index - 1];
			const isMyMessage = userName === message.sender.username;

			return (
				<div key={`msg_${index}`} style={{ width: '100%' }}>
					<div className="message-block">
						{
							isMyMessage
								?
								<MyMessageBox message={message} />
								:
								<TheirMessageBox message={message} lastMessage={messages[LastMessage]} />
						}
					</div>
					<div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
						<ReadReceipts message={message} isMyMessage={isMyMessage} />
					</div>
				</div>
			)
		})
	};

	/* <!-- To load Conversation --> */
	if (!chat) return
	(<div className="start-chat-area">

		<div className="mb-1 start-chat-icon">
			<Empty description={false} >
			</Empty>
		</div>
		<Button className="sidebar-toggle start-chat-text">Start Conversation</Button>
		{/* <h4 className="sidebar-toggle start-chat-text">Start Conversation</h4> */}
	</div>)
		;

	return (

		<div className="chat-application">
			<section className="chat-app-window">
				{/* chat title */}
				<div className="chat-title-container">
					<div className="chat-title">{chat?.title}</div>
					<div className="chat-subtitle">
						{chat.people.map((person) => ` ${person.person.username}`)}
					</div>
				</div>

				<div className="active-chat">
					<div className="user-chats">
						<div className="chats">
							{<RenderMessage chat={chat} userName={userName} messages={messages} />}
						</div>
					</div>

					<div style={{ height: '100px' }} />
					{/* chat form */}
					<MessageForm chatId={activeChat} {...props} />
				</div>

			</section>
		</div>
	);
};

export default ChatFeed;
