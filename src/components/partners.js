import React from 'react';
import logo1 from './images/ibm.png';
import logo2 from './images/artech.png';
import logo3 from './images/bank.png';
import logo4 from './images/suntrust.png';
import 'aos/dist/aos.css';
function partners(){
    return(
      
    <div class="slider">
      <center><h4 class="heading"><b> Our Partners</b> </h4> </center>
    <div class="slide-track"  data-aos="zoom-out" data-aos-duration="3000"> 
      <div class="slide">
        <img src={logo2} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo3} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo1} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo4} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo2} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo3} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo1} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo4} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo2} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo3} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo1} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo4} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo2} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo3} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo1} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo4} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo2} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo3} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo1} alt=""></img>
      </div>
      <div class="slide">
        <img src={logo4} alt=""></img>
      </div>
      
      
    </div>
  </div>
    );
}

export default partners;