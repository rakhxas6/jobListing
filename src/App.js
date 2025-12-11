import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./components/register/Login";
import Signup from "./components/register/Signup";


function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  // Load user from localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogin = (userData) => setUser(userData);
  const handleSignup = (userData) => setUser(userData);

  if (user) return <Home user={user} setUser={setUser} />;

  return (
    <div className="App">
      {showLogin ? (
        <Login onLogin={handleLogin} toggleSignup={() => setShowLogin(false)} />
      ) : (
        <Signup
          onSignup={handleSignup}
          toggleLogin={() => setShowLogin(true)}
        />
      )}
    </div>
  );
}

export default App;
