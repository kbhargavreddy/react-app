import hero from './hero_img.png';
import './App.css';
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header';
import Clients from './components/partners';
import cubelogo from './components/images/cubelogo.webp';
import ContactUs from './components/contactus';
import Services from './components/services';
import Testimonials  from './components/testimonials';
import Footer from './components/footer';
import Aboutus from './components/aboutus'
import Whyus from './components/aboutuspart2';
function App() {
  let col1={
    color:"#ec3438",
  }
    AOS.init();
let color1={
  color:"white",
}
  return(
    <div className="App">

<Header></Header>
       <main>
        <div class="first_section">
            <div class="left">
             Hi, WELCOME TO &nbsp;<br></br>
             <span style={col1}>cloud source systems.</span> <h2>We provide</h2>
             <span style={col1}>
               <Typed
                    strings={['Custom Software Development', 'IT Consulting Services', 'Cloud Solutions']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop>
                    </Typed>
                 </span>
            </div>
            <div class="right" data-aos="zoom-in-up" data-aos-duration="2000">
            <div class="cube">
            <div class="box box1">
              <img src="https://cdn.mindbowser.com/wp-content/uploads/2022/04/13162932/Devops-2.png"  alt="image 1"></img>
            </div>

            <div class="box box2">
                          <img src="https://wallpaperaccess.com/full/1393565.jpg" alt="image 2"></img>
              </div>

              <div class="box box3">
                  <img src="https://c1.wallpaperflare.com/preview/587/546/465/consulting-training-learn-finger.jpg" alt="image 3"></img></div>

              <div class="box box4">
                  <img src="https://t4.ftcdn.net/jpg/02/24/25/99/360_F_224259942_xMiqqtFR3YEePMbEGp7yHdfhRY1420Xq.jpg" alt="image 4"></img>
              </div>

              <div class="box box5">
                  <img src="https://www.thegatewaydigital.com/wp-content/uploads/2020/07/Cloud-Consulting.webp"alt="image 5"></img>
              </div>

              <div class="box box6">
                <img src="https://readiitel.com.au/wp-content/uploads/2021/03/Cloud-Consulting.png"alt="image 6"></img>
              </div>
        </div>
        </div>
        </div>
    </main>
<Clients></Clients>
<Aboutus></Aboutus>
<hr></hr>
<Whyus></Whyus>
<Services></Services>
<br></br>
<Testimonials></Testimonials>
<br></br>
<ContactUs></ContactUs>
<Footer></Footer>
</div>
  );
}

export default App;
