import React, { Component } from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import About from "./components/about";
import NotFound from "./components/notFound";
import Navbar from "./components/Navbar/Navbar.jsx";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Footer from "./components/footer";
import Home from "./components/home";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="web-site">
        <Navbar/>
       <main className="main-body">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/about" component={About} />
            <Route path="/main" component={Home}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/main" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
