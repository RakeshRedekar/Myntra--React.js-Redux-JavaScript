import React from "react";
import "./Login.css";
function Login({set}) {
    const signIn = () =>{
        set("dc")
        
    }
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLogo">
          <img src="public\icon.ico" alt="" />
          <h2>Myntra</h2>
        </div>
        <h1>Welcome To India's Largest Online Fashion Store</h1>
        <p>Please login to your account</p>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
      <img src="public\loginImage.png" />
    </div>
  );
}

export default Login;
