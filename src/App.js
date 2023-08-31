import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="42b1bdb4-bf68-4cf0-a75f-658e57253a9a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App;