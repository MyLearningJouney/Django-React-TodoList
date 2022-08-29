import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar setLoginModalIsOpen={setLoginModalIsOpen} />
        </header>
        <div>
          <p>{loginModalIsOpen}</p>
        </div>
        <TodoList />
    </div>
    </BrowserRouter>
  );
}

export default App;
