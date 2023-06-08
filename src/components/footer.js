import React from 'react';
import './css_files/footer.css';
import logo from './logo.svg';
function Footer(){
    return(
        <>
    <footer class="footer-20192">
      <div class="site-section">
        <div class="container">

          <div class="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 class="mb-0">Let's make something great together</h2>
              <h3 class="text-dark">Let's get started!</h3>
            </div>
            <div class="ml-auto">
              <a href="#" class="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
            </div>
          </div>
          <div class="row">

            <div class="col-lg-4">
              <a href="#" class="footer-logo"><img src={logo} height="60px"/></a>
              <p class="copyright">
              <br></br>
                <small>&copy; 2023</small>
              </p>
            </div>
            
            <div class="col-sm">
              <h3>Company</h3>
              <ul class="list-unstyled links">
              <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contactus">Contact us</a></li>
                <li><a href="#">Job Opportunities</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>Further Information</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Follow us</h3>
              <div class="social-share nav">
                    <a class="dribbble" href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="behance" href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="linkedin" href="#">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    </>
    );
}
export default Footer;