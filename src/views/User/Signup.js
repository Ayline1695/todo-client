import React from "react";
import AuthForm from "../../components/NewUser/User";
import { signup } from "../../services/user.service";

function Signup() {
  const handleSignup = async (user) => {
    try {
      const user = await signup(user);
      console.log("USER", user);
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="signup" onSubmit={handleSignup} />;
}

export default Signup;
