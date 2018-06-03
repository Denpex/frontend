import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <main className="login">
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button><Link to="/game">login</Link></button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </main>
    );
  }
}