import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./components/Login/LoginModal";

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');


  async function signup(user = null) {
    // default user to null
    setUser(user);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar
            setLoginModalIsOpen={setLoginModalIsOpen}
            setUser={setUser}
            user={user}
          />
        </header>
        <main>
          <div>
            {user ? (
              <TodoList user={user} token={token} />
            ) : (
              <p> Logue-se </p>
            )}
          </div>
        </main>
        {loginModalIsOpen && (
          <LoginModal
            setLoginModalIsOpen={setLoginModalIsOpen}
            setUser={setUser}
            user={user}
            setToken={setToken}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
