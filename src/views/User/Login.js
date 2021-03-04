import React from "react";
import AuthForm from "../../components/NewUser/User";
import { login } from "../../services/user.service";
import { useAuth } from "../../context/userContext";

function Login() {
  const { setUser } = useAuth();
  const handleLogin = async (user) => {
    try {
      const { data } = await login(user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser({ user: data.user });
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="login" onSubmit={handleLogin} />;
}

export default Login;
