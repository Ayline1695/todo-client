import React from "react";
import { Todos } from "./views/Todos";
import "./App.css";
import TodoProvider from "./context/todoContext";
import AuthProvider from "./context/userContext";
import Login from "./views/User/Login";
import Signup from "./views/User/Signup";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todos />
      </TodoProvider>
      <AuthProvider>
        <Login />
        <Signup />
      </AuthProvider>
    </div>
  );
}

export default App;
