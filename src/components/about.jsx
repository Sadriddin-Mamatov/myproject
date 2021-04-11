import React, {useState} from "react";
import Image from "../images/cv-image.jpg";
import {FiFacebook, FiInstagram,FiLinkedin} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";
import { WiTime10 } from "react-icons/wi";
import Moment from "react-moment";


const About = () => {
    const [date, setDate] = useState(new Date());
    const time = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);}
  return (
  <div className="cv-box">
     <img className="image" src={Image} alt="cv-img"/>
     <div className="about">
       <h2>Frontend Developer</h2>
       <p className="paragraph">Student at University of Information Technologies in Tashkent.
        2-course degree!</p>
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
          <a  href="https://www.facebook.com/sadriddin.mamatov.5268" className="btn  btn-link btn-outline-info m-2"><FiFacebook/> Facebook</a>
          <a href="https://instagram.com" className="btn btn-link btn-outline-danger m-2"><FiInstagram/> Instagram</a>
          <a  href="https://www.linkedin.com/in/sadriddin-mamatov10" className="btn btn-link btn-outline-info m-2"> <FiLinkedin/> Linkedin</a>
          <a  href="https://github.com/Sadriddin-Mamatov" className="btn btn-link btn-outline-secondary m-2"><AiFillGithub/> Github</a>
      </div>
      <h3>Skills</h3>
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
              {/* <label htmlFor="#redux">Redux</label>
              <div className="meter blue m-0" id="redux">
                  <span className="redux">20%</span>
              </div> */}
            </div>
         </div>
      </div>

      );
};

export default About;
