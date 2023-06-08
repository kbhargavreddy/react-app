import React from 'react';
import './css_files/whyus.css';
import manan from './images/testpic.jpg';
function Aboutusp2(){
    return(
<section id="why-us" class="why-us section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content-1">
                <h3> <strong>Improve and Innovate with the Tech Trends</strong></h3>
              </div>
              <br></br>
              <div class="accordion-list" data-aos="fade-up" data-aos-offset="500" data-aos-duration="5000">
                <ul>
                  <li>
                    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Experienced professionals <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                      <p>
                        With CSS, you're not just hiring another consulting company, you're partnering with experienced professionals who will not only meet, but exceed, your expectations.
                      </p>
                    </div>
                  </li>
  
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed"><span>02</span>We care about your business <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        At CSS we don't just get to know your business, we take a sincere interest in it to provide your business with a clear road map to increase productivity, efficiency, overall communication and employee morale.
                      </p>
                    </div>
                  </li>
  
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span>We are committed to quality <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        The best ways to provide our clients is affordable human resources training programs and reasonable scheduling options without sacrificing the quality of our services.
                      </p>
                    </div>
                  </li>
                  
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" class="collapsed"><span>04</span>We're flexible, agile and cost-effective <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                    <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        We adapt as your needs change, with a speed, efficiency and cost-effectiveness that larger firms just can't match. We're happy to stake our reputation on it!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
  
            </div>
  
            <div className="col-lg-5 align-items-stretch order-1 order-lg-2">
            <div class="content-1" data-aos="zoom-in" data-aos-offset="500" data-aos-duration="5000">
              <img src={manan} height="470px"></img>
              </div>             
                </div>
                
            </div>
          </div>
  
        
      </section>
    );
} 
export default Aboutusp2;