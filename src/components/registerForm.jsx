import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "./registerForm.css";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
      // .placeholder("Enter your email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  handleSubmit = (e) => {
    // Call the server
    e.preventDefault()
    console.log("Submitted");
  };

  render() {
    return (
      <>
      <div className="register-section">
        <div className="register-box">
          <h1 className="register-header">Sign up</h1>
          <form onSubmit={this.handleSubmit} className="register-form">
            {this.renderInput("username", "Email", "Enter your email...")}
            {this.renderInput("password", "Password", "Enter password...","password")}
            {this.renderInput("name", "Name", "Enter your name...")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>

      
</>
    );
  }
}

export default RegisterForm;
