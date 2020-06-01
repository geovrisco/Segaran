import React, { useState } from "react";
import LoginForm from "./LoginStacks/LoginForm";
import RegisterForm from "./LoginStacks/RegisterForm";
import { Alert } from "react-native";
function LoginScreen() {
  const [loginForm, setLoginForm] = useState(true);
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setLoginForm(!loginForm);
    console.log(loginForm);
  };

  const onChangePhone = (e) => {
    if (/^\d+$/.test(e)) {
      setPhone(e);
    } else {
      Alert.alert("Input ada yang salah", "Nomor HP harus berupa angka");
    }
  };

  const clearField = () => {
    setLoginForm(true);
    setFullName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {loginForm && (
        <>
          <LoginForm
            toggleForm={toggleForm}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          ></LoginForm>
        </>
      )}
      {/* login form false */}
      {!loginForm && (
        <>
          <RegisterForm
            setFullName={setFullName}
            setPhone={onChangePhone}
            setEmail={setEmail}
            setPassword={setPassword}
            fullname={fullname}
            phone={phone}
            email={email}
            password={password}
            toggleForm={toggleForm}
            clearField={clearField}
          ></RegisterForm>
        </>
      )}
    </>
  );
}

export default LoginScreen;
