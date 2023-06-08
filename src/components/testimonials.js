import React from 'react';
import './css_files/testimonials.css';
import test1 from './images/test1.jpg';
import Marquee from "react-fast-marquee";
function Testimonials(){
    let quote_color={
        color:'red',
      }
    return(
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="zoom-in-up">
        <div class="section-header">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>TESTIMONIALS</h2>
                    <p>"Real Stories, Real Impact: Hear What Our Customers Have to Say!"</p>
                </div>
            </div>
        </div>
        </div>
        <Marquee pauseOnHover> 
        <div class="slides-3 swiper">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src={test1} class="testimonial-img flex-shrink-0" alt=""></img>
                    <div>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                    </div>
                  </div><br></br>
                  <p>
                  <i class="fas fa-quote-left" style={quote_color}></i>
                  &nbsp; Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  &nbsp;<i class="fas fa-quote-right" style={quote_color}></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src={test1} class="testimonial-img flex-shrink-0" alt=""></img>
                    <div>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                    </div>
                  </div><br></br>
                  <p>
                  <i class="fas fa-quote-left" style={quote_color}></i>
                  &nbsp; Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                  &nbsp;<i class="ffas fa-quote-right" style={quote_color}></i>
                  </p>
                </div>
              </div>
            </div>


            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <div class="d-flex align-items-center">
                    <img src={test1} class="testimonial-img flex-shrink-0" alt=""></img>
                    <div>
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                    </div>
                  </div><br></br>
                  <p>
                  <i class="fas fa-quote-left" style={quote_color}></i>
                    &nbsp; Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                    &nbsp; <i class="fas fa-quote-right" style={quote_color}></i>
                  </p>
                </div>
              </div>
            </div>
            </Marquee>
            <br></br>
            </div>
    </section>
    );
}
export default Testimonials;

