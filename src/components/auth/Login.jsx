import React,{useState} from 'react';

import axios from 'axios';

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handelSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
			'User-Name':username,
			'User-Secret':password
		}

		try {
			//fetch the current user if it exists
			await axios.get('https://api.chatengine.io/chats', {headers:authObject});
			//saving user's username and password to localStorage
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
			//reload the page
			window.location.reload();
		} catch (error) {
			setError(`Incorrect Credentials 😔: check that the username and password are correct 🥰`)
		}

	}
	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">MeToU Chat App</h1>
				<form action="#" className="form" onSubmit={handelSubmit}>

					<input type="text" className="input"
					placeholder = "Username" 
					value = {username}
					onChange = {(e) => setUsername(e.target.value)} 
					required />

					<input type="password" className="input"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required />

						<div align="center">
							<button type="submit" className="button" onClick={handelSubmit} >
								<span>Login To Chat</span>
							</button>
						</div>
					

				</form>
				<h2 className="error">{error}</h2>
			</div>
		</div>
	);
};

export default LoginForm;
