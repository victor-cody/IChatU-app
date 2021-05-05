import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

const SignUpForm = (props) => {
	const {chatID} = props;
	const history = useHistory()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setconfirmPassword] = useState('')

	const [error, setError] = useState('')

	const handelSubmit = async (e) => {
		e.preventDefault();
		if (!(username.length > 0 && password === confirmPassword && password.length > 0)) return;

		const authObject = {
			'Private-Key': '2f389292-d5e1-4799-bd31-b456e7e94845',
			'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
			'User-Name': username,
			'User-Secret': password
		}

		// const authHeader = {
		// 	'PRIVATE-KEY': '2f389292-d5e1-4799-bd31-b456e7e94845',
		// 	'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
		// }
		// const authBody = {
		// 	'username': username,
		// 	'secret': password
		// };

		var userData = {
			"username": username,
			"secret": password,
			// "first_name": "Bob",
			// "last_name": "Baker",
			// "custom_json": { "fav_game": "Candy Crush", "high_score": 2002 }
		};

		var addNewUser = {
			method: 'post',
			url: 'https://api.chatengine.io/users/',
			headers: {
				'PRIVATE-KEY': '2f389292-d5e1-4799-bd31-b456e7e94845'

			},
			data: userData
		};

		var addNewChatUser = {
			method: 'post',
			url: 'https://api.chatengine.io/chats/' + chatID + '/people/',
			headers: {
				'Project-ID': '25a91c10-8623-4a0d-a48a-3de096d44b54',
				'User-Name': username,
				'User-Secret': password
			},
			data:{
				"username":username
			}
		};


		try {
			//fetch the current user if it exists
			const userExists = await axios.get('https://api.chatengine.io/users/', { headers: authObject });
			const users = userExists.data;
			console.log(users);
			users.forEach((user) => {
				// if user already exists and in localStorage redirect them to the chat room
				if (user && (localStorage.getItem('username') && localStorage.getItem('username') === user.username)) {
					history.push('/chat')
					return;
				}
				else if (user && user.username === username) {
					//saving the new user's username and password to localStorage
					localStorage.setItem('username', username);
					localStorage.setItem('password', password);
					//redirecting them to the chat page to chat
					console.log('worked25');
					history.push('/chat')
					return;
				}
			})
			console.log('worked');

			console.log('worked2');
			// if user don't exists, create a new user 
			await axios(addNewUser)
				.then(function (response) {
					console.log(JSON.stringify(response.data));
					console.log('worked255');
				})
				.catch(function (error) {
					console.log(error);
				});
			// add them to chat
			await axios(addNewChatUser)
				.catch(function (error) {
					console.log(error);
				})

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			history.push('/chat')

		} catch (error) {
			console.log(error);
			setError(`oops, something went wrong`)
		}

	}

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">SignUp ~ IChatU </h1>
				<hr />
				<form action="#" className="form" onSubmit={handelSubmit}>

					<input type="text" className="form_input input"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required />


					<input type="password" className="form_input input"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						// min='6'
						required />

					<input type="password" className="form_input input"
						name="confirm password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setconfirmPassword(e.target.value)}
						// min='6'
						required />


					<div align="center">
						<button type="submit" className="button" onClick={handelSubmit} >
							<span>Login To Chat</span>
						</button>
					</div>

					<h2 className="error text-center">{error}</h2>

				</form>

			</div>
		</div>
	);
};

export default SignUpForm;
