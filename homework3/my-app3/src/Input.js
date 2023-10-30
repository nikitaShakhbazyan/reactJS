import React, { useState, useRef } from "react";
import Card from "./Cards";

function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const emailRef = useRef(0);
  const passwordRef = useRef(0);

  const handleLogin = () => {
    setLoggedIn(email === "digitalAcademy@gmail.com" && password === "iLoveReact123" ? true : false);

  };

  return (
    <div>
      {loggedIn ? (<div>
          <Card/>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="Email" ref={emailRef} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          
          <input type="password" placeholder="Password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)}/>
          <br />

          <button disabled={!email || !password} onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Input;
