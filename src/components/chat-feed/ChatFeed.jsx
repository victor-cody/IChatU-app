import React from 'react';

// import { Button, Empty } from 'antd';
import RenderMessage from './RenderMessage.jsx';
import MessageForm from '../message-form/MessageForm';


const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props;

	const chat = chats && chats[activeChat];

	/* <!-- To load Conversation --> */
	if (!chat) return
	<div />
		;

	return (

		<div className="chat-application">
			<section className="chat-app-window">
				{/* chat title */}
				<div className="chat-title-container">
					<div className="chat-title">{chat.title}</div>
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
					<MessageForm chatID={activeChat} {...props} />
				</div>

			</section>
		</div>
	);
};

export default ChatFeed;
