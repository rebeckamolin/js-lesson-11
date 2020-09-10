import React, { useRef, useState } from "react";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL} + auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log(email, password)
    fetch(LOGIN_URL);
  }
  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" onChange={(event) => setEmail(event.currentTarget.value)} placeholder="rebecka@molin.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={(event) => setPassword(event.currentTarget.value)}/>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
