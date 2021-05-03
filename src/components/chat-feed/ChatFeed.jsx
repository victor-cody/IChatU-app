import React from 'react';

import RenderMessage from './RenderMessage.jsx';
import MessageForm from '../message-form/MessageForm';


const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages } = props;

	const chat = chats && chats[activeChat];

	/* <!-- To load Conversation --> */
	if (!chat) return
	(<div class="start-chat-area">
		<div class="mb-1 start-chat-icon">
			<i className="ion-android-chat"></i>
		</div>
		<h4 class="sidebar-toggle start-chat-text">Start Conversation</h4>
	</div>)
		;

	return (

		<div className="chat-application">
			<section class="chat-app-window">
				{/* chat title */}
				<div className="chat-title-container">
					<div className="chat-title">{chat.title}</div>
					<div className="chat-subtitle">
						{chat.map((person) => ` ${person.person.username}`)}
					</div>
				</div>

				<div className="active-chat">
					<div class="user-chats">
						<div class="chats">
							<RenderMessage userName={userName} messages={messages} />
						</div>
					</div>

					<div style={{ height: '100px' }} />
					{/* chat form */}
					<MessageForm chatID={activeChat} {...props}/>
				</div>

			</section>
		</div>
	);
};

export default ChatFeed;
