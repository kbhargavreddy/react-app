import React from "react";
import l1 from './images/a.png';
import l2 from './images/soft.png';
import l3 from './images/agile.png';
import l4 from './images/mob.png';
import l5 from './images/cloud1.png';
import l6 from './images/team.png';
import './css_files/services.css';
import 'aos/dist/aos.css';
function services(){
    return(
        <section class="section services-section" id="services">
    <div class="container" >
        <div class="row" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div class="col-lg-6">
                <div class="sect-title">
                    <h2>Our Services</h2>
                    <p>We always stay with our clients and respect their business. We deliver 100% and provide instant response to help them succeed in constantly changing and challenging business world.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-duration="3000">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-desktop"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Consulting Service</h5>
                        <p>Our consultants possess extensive knowledge and proficiency in various business domains as well as cutting-edge technical fields like DevOps, Cloud infrastructure, and Cloud-native architectures.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-duration="3000">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Manage Teams</h5>
                        <p>Each team member is meticulously chosen based on your specific requirements and expertise needs. Our developers seamlessly integrate into your team, playing a vital role throughout the entire project.</p><br></br>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="fade-up" data-aos-duration="3000">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-comment"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Agile Team</h5>
                        <p>Get a time and effort estimate for your requirements and let us assemble a team, managed by an experienced Team Lead, to develop products from scratch according to your time and budget.</p><br></br>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-image"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Cloud Solutions</h5>
                        <p>Cloud Source Systems aids in the assessment of whether different cloud-based solutions align with the specific requirements of your business, helping you make informed decisions.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-th"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Mobility Services</h5>
                        <p>With our Mobility Services, you can enjoy enhanced productivity and better cost management, resulting in tangible benefits for your business.</p><br></br>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-cog"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Custom Software Development</h5>
                        <p>Custom software refers to a personalized software solution that is designed & developed specifically to cater to the unique requirements of an organization.</p><br></br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}

export default services;