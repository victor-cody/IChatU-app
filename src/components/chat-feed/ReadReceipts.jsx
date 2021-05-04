
const ReadReceipts = ({ chat, message, isMyMessage }) =>

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

export default ReadReceipts;
