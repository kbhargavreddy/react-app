import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import './style.css';
import { EffectCards } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
  return (
    <>
    <div class="container" id="services_heading" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> 
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
          Consulting Service<br></br>
          <div class="card_service">Our consultants have broad experience and expertise in numerous business domains and the latest technical areas such as DevOps, Cloud infrastructure and Cloud-native architectures.</div> 
          </div>
          </div></SwiperSlide>
        

          <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
        Manage Team Extension<br></br>
          <div class="card_service">We carefully select each team member based on the requirements and expertise you need. Our developers become an integral part of your team during the entire project.</div> 
          </div>
          </div></SwiperSlide>

          <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
        Agile Team<br></br>
          <div class="card_service">Get a time and effort estimate for your requirements and let us assemble a team, managed by an experienced Team Lead, to develop products from scratch according to your time and budget.</div> 
          </div>
          </div></SwiperSlide>

          <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
        Cloud Solutions<br></br>
          <div class="card_service">Cloud Source Systems helps you to determine whether various cloud-based solutions are the right choice for your business.</div> 
          </div>
          </div></SwiperSlide>

          <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
        Mobility Services<br></br>
          <div class="card_service">Our Mobility Services ensure you reap the benefits of increased productivity and improved cost control.</div> 
          </div>
          </div></SwiperSlide>

          <SwiperSlide><div class="box11">
          <div class="service-img"> 
          <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"></img>
          </div>

        <div class="content">
        Custom Software Development<br></br>
          <div class="card_service">We define custom software as an individualized software solution developed to meet an organization's specific needs.</div> 
          </div>
          </div></SwiperSlide>
      </Swiper>
      </div>
      <div class="col-6 col-md-4">
        HAI HELLO WELCOME
        </div>      
        </div>
      </div>
    </>
  );
}


/* swiper services 

.swiper {
	width: 300px;
	height: 400px;
	margin-left: 10px;
  }
  
  .swiper-slide {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 18px;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
  }
  
  .swiper-slide:nth-child(1n) {
	background-image: linear-gradient(to right, #ff512f, #f09819);
  }
  
  .swiper-slide:nth-child(2n) {
	background-image: linear-gradient(to right, #8360c3, #2ebf91);
  }
  
  .swiper-slide:nth-child(3n) {
	background-image: linear-gradient(to right, #8e2de2, #4a00e0);
  }
  
  .swiper-slide:nth-child(4n) {
	background-image: linear-gradient(to right, #fffbd5, #b20a2c);
  }
  
  .swiper-slide:nth-child(5n) {
	background-image: linear-gradient(to right, #00b4db, #0083b0);

  }
  
  .swiper-slide:nth-child(6n) {
	background-image: radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% );
  }
  
#services_heading{
	justify-content: space-between;
	margin-top: 100px;
}

.swiper img{
	height: 100px;
	width: 100px;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	padding-left: 10px;
	padding-top: 20px;
}

.swiper .box11{
	justify-content: center;
	justify-items: center;
	align-items: center;
	text-align: center;
	position: inherit;
}
.swiper .content{
	text-align: center;
	font-size:25px;
	padding-top: 30px;
	color:#2e3d5a;
}

.swiper .card_service{
	font-size: 15px;
	text-align: center;
	font-weight: 200px;
	padding: 15px;
	color: white;
}
*/