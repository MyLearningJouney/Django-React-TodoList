import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import LoginModal from './components/Login/LoginModal';

function App() {

const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  console.log(loginModalIsOpen)

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar setLoginModalIsOpen={setLoginModalIsOpen} />
        </header>
        <TodoList />
        {loginModalIsOpen && <LoginModal setLoginModalIsOpen={setLoginModalIsOpen} />}
    </div>
    </BrowserRouter>
  );
}

export default App;
