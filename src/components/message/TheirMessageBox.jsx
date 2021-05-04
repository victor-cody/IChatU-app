
const TheirMessageBox = ({ lastMessage, message }) => {

	const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

	return (
		<div>
			{
				isFirstMessageByUser && (
					<div className="chat-avatar">
						<span className="avatar box-shadow-1 cursor-pointer">
							<img src={`url(${message.sender.avatar})`}
								alt="avatar"
								height="36"
								width="36" />
						</span>
					</div>
				)
			}
			{
				message.attachments && message.attachments.length > 0
					?
					(
						<img
							src={message.attachments[0].file}
							alt="message-attachment"
							className="message-image"
							style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
						/>
					)
					:
					(
						<div className="chat chat-left">
							<div className="chat-body">
								<div className="chat-content" style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
									<p>{message.text}</p>
								</div>
							</div>
						</div>
					)
			}
		</div>
	);
};

export default TheirMessageBox;
