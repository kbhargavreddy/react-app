import React from 'react';
import hands from './images/hands.jpg';
import building from './images/building.jpg';
import comp from './images/comp.jpg';
import './css_files/aboutus.css';
function AboutUs(){
    return(
    <section class="para1" id="about">
    <div class="container">
    <div class="row" data-aos="fade-right" data-aos-duration="3000">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>ABOUT US</h2>
                    <p>Unlocking your potential through innovative solutions and expert consulting services.</p>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
      <div class="row align-items-center gx-5">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-6" data-aos="zoom-out-left">
              <div class="row">
                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                  <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <img src={building} class="img-fluid" alt="Image" />
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-6" data-aos="zoom-out-down">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <img src={hands} class="img-fluid" alt="Image" />
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>
           

                <div class="col-lg-12 col-md-12 mt-4 pt-2" data-aos="zoom-out-right">
                  <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                    <img src={comp} class="img-fluid" alt="Image" />
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>
                
              </div>
              
            </div>
           
          </div>
          
        </div>
       

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2" data-aos="fade-left" data-aos-offset="500" data-aos-duration="5000">
          <div class="section-title ml-lg-5">
            <p class="misson_heading"> 
              <b><span id="span1">0</span>ur mission is to help the clients to gain strategic advantage and capitalize on their technology
              and<br />
              to provide cost effective, innovative and quality services.</b>
            </p>
            <p class="text">Cloud Source Systems is a fast growing, innovative IT services company that
              specializes in Cloud Solutions, Digital Transformation, Custom Software Development and Manage Team
              Extensions. CSS provides custom solutions to complex IT business problems that meet industry-specific
              standards. We strive to truly partner with our clients by listening first and working through the issues
              together to allow them to achieve the maximum benefit from their data and technology.</p>
            </div>
          </div>
        </div>   
      </div>
      <br></br>
      <br></br>
      <br></br>
  </section>
    );
}
export default AboutUs;