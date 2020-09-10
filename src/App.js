import React from "react";

function App() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function login(){
    console.log("login")
  }
  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInput}
            name="email"
            placeholder="rebecka@molin.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
