import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <TodoList />
    </div>
    </BrowserRouter>
  );
}

export default App;
