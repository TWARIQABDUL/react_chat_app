import { useContext } from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post';
import Login from './pages/log';
import GetPost from './props/getPost';
import GetStory from './props/getStory';
import Story from './props/story';
import  SessionContext from './session/session';

function App() {
  const {session} = useContext(SessionContext)
  console.log(session);

  if (session =='') {
    return(
      <div className='App'>
        <Login/>
      </div>
    );
  } else {
    return(
      <div className='App'>
        <Header />
        
        <Story />
        <GetPost />
      </div>
    )
  }
}

export default App;
