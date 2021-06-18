import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Image from "../images/developer.jpg"
import ImageC from "../images/CiscoSmart.png";
import Typical from 'react-typical';
import { WiTime10 } from "react-icons/wi";
import Moment from "react-moment";
import ImageM from "../images/movies.png";
import ImageA from "../images/about.png";
import ImageL from "../images/login.png";
import ImageR from "../images/register.png";
import ImageB from "../images/booklist.png";
import {FiFacebook, FiInstagram,FiLinkedin} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";
// import GoogleMapReact from "google-map-react";

const  Home = () => {
            const [date, setDate] = useState(new Date());
            const time = () => {
            setInterval(() => {
            setDate(new Date());
            }, 1000);}
    return ( 
        <>
                <div className="UxuiHeader_wrap">
                    <Typical loop
                    steps={['Hello! I`m Frontend Developer', 3500]} className="matn"/>
                    <a className="btn btn-outline-primary btn-rounded m-3 " href="./Myresume.docx" download >Open My CV</a>
                </div>

              
                <div className="about-section">


                    <div className="about-heading">
                        <span className="about-line-left about-line"></span>
                        <br/>
                        <h1 className="about-header">About me</h1>
                        <br/>
                        <span className="about-line-right about-line"></span>
                    </div>
                    
                    <div className="about__box">
                        
                        <div className="box-image">
                              <img src={Image} alt="ds" className="developer-image"/> 
                        </div>

                        <div className="informations">
                            <h2>Frontend Developer</h2>
                            <p className="paragraph m-5">Assalomu aleykum I'm Mamatov Sadriddin, I was born on May 10 in 1998 years in the Bakhmal district Jizzakh and is currently studying at Tashkent University of Information Technologies. I have learned Frontend via online course of Mosh Hamedoni. My technical skills: HTML 5, CSS 3, SASS, BOOTSTRAP 4, Javascript, REACT JS, My aims: I am looking for a sincere team. I can promise to be stronger by working on myself, and I won’t stop there. I want to have a place in your team in the future also I want to improve my skills!</p>

                            <div className="aboutDate" data-aos="fade-up">
                                <h2>
                                    My age: {"  "}
                                    <Moment fromNow ago>
                                    1998-05-10T12:59-0500
                                    </Moment>
                                    <span> old</span>
                                </h2>
                                <div className="currentTime">
                                    <WiTime10 />
                                    <h2>
                                    {date.toLocaleTimeString()}
                                    {time()}
                                    </h2>
                                </div> 
                            </div>

                        </div> 

                    </div>
                 
               </div>

    {/*======= <---skills-->========= */}
               <div className="qobilyatlar">
                        <div className="about-heading">
                            <span className="about-line-left about-line"></span>
                            <br/>
                            <h1 className="about-header">My skills</h1>
                            <br/>
                            <span className="about-line-right about-line"></span>
                        </div>
                        <div className="skills">
                            <div className="first">
                            <label htmlFor="#html">HTML</label>
                                <div className="meter m-0" id="html">
                                <span className="html text-dark">90%</span>
                                </div>
                                <label htmlFor="#css">CSS</label>
                                <div className="meter orange nostripes m-0" id="css">
                                    <span className="css text-dark">80%</span> 
                                </div>
                                <label htmlFor="#sass">SASS</label>
                                <div className="meter red m-0" id="sass">
                                    <span className="sass text-dark">80%</span>
                                </div>
                                <label htmlFor="#bootstrap">Bootsrtap</label>
                                <div className="meter animate m-0" id="bootstrap">
                                    <span className="bootstrap text-dark">80%</span>
                                </div>
                            </div>
                            <div className="second">
                                <label htmlFor="#javascript">Javascript</label>
                                <div className="meter animate m-0" id="javascript">
                                    <span className="javascript text-dark">70%</span>
                                </div>
                                <label htmlFor="#reactjs">Reactjs</label>
                                <div className="meter m-0" id="reactjs">
                                    <span className="reactjs text-dark">70%</span>
                                </div>
                                <label htmlFor="#photoshop">Photoshop</label>
                                <div className="meter blue m-0" id="photoshop">
                                    <span className="photoshop text-dark">70%</span>
                                </div>
                                <label htmlFor="#english">English</label>
                                <div className="meter blue m-0" id="english">
                                    <span className="english text-dark">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* ==================================works=============================== */}
        <div className="works">
                         <div className="about-heading">
                
                            <span className="about-line-left about-line about-line-works"></span>
                            <br/>
                            <h1 className="about-header">My works</h1>
                            <br/>
                            <span className="about-line-right about-line about-line-works"></span>
                        </div>
                <div className="row">
                     <div className="card-group">
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageR} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This web application was created using technologies such as MERN + Redux, this part is Login form, Html, CSS, JS, Reactjs </p>
                            <Link to="/register" className="btn btn-outline-dark view-btn">View project </Link>

                            </div>
                        </div>
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageM} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This web application was created using technologies such as MERN + Redux, this part is Movies form, Html, CSS, JS, Reactjs </p>
                            <Link to="/movies" className="btn btn-outline-dark view-btn ">View project </Link>
                        </div>
                        </div>
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageA} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This web application was created using technologies such as MERN + Redux, this part is Login form, Html, CSS, JS, Reactjs </p>
                            <Link to="/about" className="btn btn-outline-dark view-btn">View project </Link>
                            </div>
                      
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageL} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link to="/login" className="btn btn-outline-dark view-btn">View project </Link>
                            </div>
                         
                        </div>
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageB} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <a href="https://addnewbooklist.netlify.app/" className="btn btn-outline-dark view-btn">View project </a>
                        </div>
                        </div>
                        <div className="card p-4">
                            <img className="card-img-top" src={ImageC} alt="ds"/>
                            <div className="card-body">
                            <p className="card-text">This web application was created using technologies such as MERN + Redux, this part is Login form, Html, CSS, JS, Reactjs</p>
                            <a href="http://smartnet.ca-dc.uz/" className="btn btn-outline-dark view-btn">View project </a>
                            </div>
                        </div>
                 </div>
            </div>            
        </div>

         {/* ==================================Contact and follow me=============================== */}

        <div className="contacts-follows">
                <div className="about-heading"> 
                    <span className="about-line-left about-line contact-line"></span>
                    <br/>
                    <h1 className="about-header">Contact and Follow me</h1>
                    <br/>
                    <span className="about-line-right about-line contact-line"></span>
                </div>
                <div className="contact-box">
                     <div className="location-me">
                        <div className="map">
                            <iframe 
                            title="This is a unique title"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0689418067077!2d69.29454821479567!3d41.350855206223166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef357aab6ac75%3A0xd395e4ba98b83a6f!2zMi3QuSDQv9GA0L7QtdC30LQg0KXQuNGC0L7QuSwg0KLQvtGI0LrQtdC90YIsIFV6YmVraXN0YW4!5e0!3m2!1sen!2s!4v1617953289650!5m2!1sen!2s" 
                            width="600"
                            height="450"
                            style={{border:2, width:"100%", height:"100%"}}
                            allowFullScreen=""
                            aria-hidden="false"
                            loading="lazy"
                            tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact-me">
                        <h1 className="contact-label">Address</h1>
                        <span className="my-4 text-info good">Yunusobod District, Tashkent</span>
                        <h1 className="contact-label">Phone</h1>
                        <a href="tel: +998994061098" className="my-4 text-info good">+998994061098</a>
                        <h1 className="contact-label">Email</h1>
                        <span className="my-4 text-info good">sadriddin1005@gmail.com</span>
                        
                    </div>
                </div>
                <div className="follow-me">
                        <a  href="https://www.facebook.com/sadriddin.mamatov.5268" className="btn  btn-link btn-outline-info text-info m-2"><FiFacebook/> Facebook</a>
                        <a href="https://instagram.com" className="btn btn-link btn-outline-danger text-danger m-2"><FiInstagram/> Instagram</a>
                        <a  href="https://www.linkedin.com/in/sadriddin-mamatov10" className="btn btn-link btn-outline-info text-info m-2"> <FiLinkedin/> Linkedin</a>
                        <a  href="https://github.com/Sadriddin-Mamatov" className="btn btn-link btn-outline-secondary text-secondary m-2"><AiFillGithub/> Github</a>
                </div>
         </div>
        </>
   );
}
 
export default Home;