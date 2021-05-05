import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import Home from './pages/Home/Home'
import ChatFeed from './components/chat-feed/ChatFeed';
import LoginForm from './components/auth/Login';
import SignUpForm from './components/auth/SignUp';


import './assets/css/bootstrap.min.css';
import './assets/App.css';



function App() {

  // const a = '2f389292-d5e1-4799-bd31-b456e7e94845';

  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <Router>
      <>
        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/login'>
            <LoginForm />
          </Route>

          <Route path='/signup'>
            <SignUpForm />
          </Route>

          <Route path="/chat" >
            <ChatEngine
              height='100vh'
              projectID='25a91c10-8623-4a0d-a48a-3de096d44b54'
              // privateKey= '2f389292-d5e1-4799-bd31-b456e7e94845'
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              // userName='linda'
              // userSecret='floxy64'

              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
              onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
          </Route>

        </Switch>
      </>
    </Router>
  );
}

export default App;
