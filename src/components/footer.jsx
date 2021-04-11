import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {GiTigerHead} from "react-icons/gi";
import {MdPhoneInTalk} from "react-icons/md";
import {GoLocation} from "react-icons/go";
import {FaTelegram,FaInstagram,FaFacebookSquare } from "react-icons/fa";
import "../index.css";

class Footer extends Component{
    render(){
        return(
            <>
           <div className="footer">
               <div className="footer-icon-box">
                  <GiTigerHead className="footer-icon"/>
               </div>
               <div className="footer-help footer-bar">
                   <p>Footer section help</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
               </div>
               <div className="about-website footer-bar">
                   <p>About section</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
               </div>
               <div className="footer-information footer-bar">
                   <p>Information</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
                   <p>Lorem, ipsum.</p>
               </div>
               <div className="footer-bar">
                   <div className="phone">
                      <MdPhoneInTalk className="phone-icon"/>
                      <div>+998994061098</div>
                   </div>
                   <a className="location" href="https://goo.gl/maps/B33NqU7xjHmFtK2r8">
                   <GoLocation className="location-icon"/>
                   <div>Yunusabad Tashkent</div>
                   </a>
                   <div className="contacts">
                     <h4 className="text-warning">Follow me</h4>
                     <div className="cnt-link">
                        <a href="#https://instagram.com">
                            <FaInstagram className="contact-icon ins"/>
                        </a>
                        <a href="#https://www.facebook.com/sadriddin.mamatov.5268">
                            <FaFacebookSquare className="contact-icon fac"/>
                        </a>  
                        <a href="#https://t.me/Mister_Sadriddin">
                            <FaTelegram className="contact-icon teg"/>
                        </a>
                     </div>
                   </div>  
               </div>
          </div>
              <div className="bottom">
                   {/* <hr className="footer-line"/> */}
                   <h6 className="summary">Copyright © 2021 - All right reserved | This website created by Sadriddin Mamatov</h6>
              </div>
             
        </>         
        )
    }
}
 
export default Footer;