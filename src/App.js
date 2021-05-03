import { ChatEngine } from "react-chat-engine";

import './assets/css/bootstrap.min.css';
import './assets/css/components.min.css';
import './assets/css/app-chat.min.css';
import './assets/css/app-chat-list.min.css';
import './assets/App.css';


function App() {
  return (
    <ChatEngine
      projectID= '25a91c10-8623-4a0d-a48a-3de096d44b54'
      userName= 'linda'
    userSecret = 'floxy64'   

    height = '100vh' 
    />
  );
}

export default App;
