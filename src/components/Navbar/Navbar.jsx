import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import {GiTigerHead} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component{
    state={
        clicked: false
    }
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <NavLink to='/' className='nav-link'>
            <h1 className="navbar-logo">
                
            <GiTigerHead className="main-icon"/><span className="author"> Mister Sadriddin</span>
            </h1>
            </NavLink>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>+
                </i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
                {MenuItems.map((item, index)=> {
                return (<li key={index}><NavLink className={item.cName} to={item.url}>{item.title}</NavLink></li>)
                })}      
            </ul>
            {/* <a className="btn btn-primary" href="login">Login</a> */}
            </nav>
        )
    };
}
export default Navbar;