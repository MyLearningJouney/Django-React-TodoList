import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./components/Login/LoginModal";
import SignupModal from "./components/Signup/SignupModal";

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar
            setLoginModalIsOpen={setLoginModalIsOpen}
            setSignupModalIsOpen={setSignupModalIsOpen}
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
        {signupModalIsOpen && (
          <SignupModal
            setSignupModalIsOpen={setSignupModalIsOpen}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
