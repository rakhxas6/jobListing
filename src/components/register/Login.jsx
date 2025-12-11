import React, { useState } from "react";

const Login = ({ onLogin,toggleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = existingUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      alert("Login successful!");
      onLogin(userFound);
    } else {
      alert("Invalid email or password");
    }

  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">Login</h2>

        <div className="flex flex-col space-y-1">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={toggleSignup}>
            Signup
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
