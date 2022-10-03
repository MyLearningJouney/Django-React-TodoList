import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "./components/Login/LoginModal";
import SignupModal from "./components/Signup/SignupModal";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [scroll, setScroll]= useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className={!scroll && user == null ? "AppHeaderTop": "AppHeaderScroll"}>
          <Navbar
            setLoginModalIsOpen={setLoginModalIsOpen}
            setSignupModalIsOpen={setSignupModalIsOpen}
            setUser={setUser}
            user={user}
          />
        </header>
        <main>
            {user ? (
              <TodoList user={user} token={token} />
            ) : (
              <Homepage             
                setSignupModalIsOpen={setSignupModalIsOpen}
              />
            )}
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
