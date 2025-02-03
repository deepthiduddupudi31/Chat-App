import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './Pages/Homepage.js';
import ChatPage from './Pages/ChatPage.js'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={ChatPage}/>

    </div>
  );
}

export default App;
