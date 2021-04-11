import React from "react";
import Joi from "joi-browser";
import {Link} from "react-router-dom";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="login-section">
         <div className="login-box">
        <h1 className="login-header">Login</h1>
        <form onSubmit={this.handleSubmit} className="login-form">
          {this.renderInput("username", "Username", "Enter your name...")}
          {this.renderInput("password", "Password", "Enter password...", "password")}
          <div  className="la">
           {this.renderButton("Login")}
          </div>
          <br/>
          <div>
          Don`t have an account?
          <Link to="/register">Sign up?</Link>
          <br/>
         <a href="#email"> Forgot your password?</a>
          </div>
      
        </form>
      </div>
      </div>
     
    );
  }
}

export default LoginForm;
