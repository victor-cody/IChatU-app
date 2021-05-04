import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/chat-feed/ChatFeed';
import LoginForm from './components/auth/Login'


import './assets/css/bootstrap.min.css';
import './assets/css/components.min.css';
import './assets/css/app-chat.min.css';
import './assets/css/app-chat-list.min.css';
import './assets/App.css';



function App() {
  if(!localStorage.getItem('username')) return <LoginForm/> ;

  return (
    <ChatEngine
      height='100vh'
      projectID='25a91c10-8623-4a0d-a48a-3de096d44b54'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // userName='linda'
      // userSecret='floxy64'

      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
