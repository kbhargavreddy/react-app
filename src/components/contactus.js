import React from "react";
import './css_files/contactus.css';
function contactUs() {
  return (
    <div className="body">
<section class="section gray-bg" id="contactus">
    <div class="container">
        <div class="row" data-aos="fade-right">
            <div class="col-lg-6">
                <div class="sec-title">
                    <h2>CONTACT US</h2>
                    <p>WE LOVE TO TALK</p>
                </div>
            </div>
        </div>
        <div class="row flex-row-reverse" >
            <div class="col-md-7 col-lg-8 m-15px-tb" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                <div class="contact-form">
                     <form action="/" method="post" class="contactform contact_form" id="contact_form">
                        <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                        <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                        <div class="row">
                          <center><h3>READY TO REQUEST A QUOTE?</h3></center>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="name" type="text" placeholder="*Name" class="form-control" /> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="phone" type="text" placeholder="*Phone" class="form-control" />  
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="email" type="text" placeholder="*E-mail" class="form-control" /> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input id="subject" type="text" placeholder="*Subject" class="form-control" /> 
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea id="message" placeholder="Message" class="form-control" rows="3"></textarea> 
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="send">
                                    <a id="send_message" class="px-btn theme" href="#"><span>Send Message</span> <i class="arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5 col-lg-4 m-15px-tb">
                <div class="contact-name">
                    <h5>Mail</h5>
                    <p>info@cloudsourcesys.com</p>
                </div>
                <div class="contact-name">
                    <h5>Address</h5>
                    <p>Cyber Towers, <br/>HiTech City</p>
                </div>
                <div class="contact-name">
                    <h5>Phone</h5>
                    <p>858-433-0532</p>
                </div>
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
</section>
    </div>
  );
}

export default contactUs;