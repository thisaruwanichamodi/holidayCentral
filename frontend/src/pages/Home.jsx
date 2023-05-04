import React from 'react'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import ServicesList from '../services/ServicesList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';
import Login from './Login';



const Home = () => {
  return ( <>
              {/* =============================start============================= */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=""/>
            </div>
            <h1>Traveling opens the door to creating <span className='highlight'> memories </span>
            </h1>
            <p>HolidayCentral is a travel company with experienced agents offering personalized travel packages for various needs, such as romantic getaways, family vacations, and group tours. They handle flights, hotels, transportation, activities, and other arrangements to ensure hassle-free and enjoyable travel experiences for clients. Their commitment to high-quality service and customer satisfaction makes them a top choice for booking trips.</p>
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
              {/* =============================end============================= */}
              <section>
                <Container>
                  <Row>
                    <Col lg="3">
                      <h5 className="services__subtitle">What we serve</h5>
                      <h2 className="survices__title">We offer our best services</h2>
                    </Col>
                    <ServicesList />
                  </Row>
                </Container>
              </section>
              {/* =============================featured tour section start============================= */}
              <section>
                <Container>
                  <Row>
                    <Col lg='12' className='mb-5'>
                      <Subtitle subtitle={'Explore'} />
                      <h2 className='featured__tour-title'>Our package tours</h2>
                    </Col>
                    <FeaturedTourList />
                  </Row>
                </Container>
              </section>
              {/* =============================featured tour section end============================= */}

              {/* =============================experience section start============================= */}
              <section>
                <Container>
                <Row>
                  <Col lg='6'> 
                  <div className='experience__content'>
                    <Subtitle subtitle={'Experience'} />
                    <h2>With our all experience <br/>we will serve you</h2>
                    <p>We have extensive experience in the travel industry, and we are 
                    <br/>
                    committed to using our expertise to provide you with exceptional service.</p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                    <div className="counter__box">
                    <span>5k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                    <div className="counter__box">
                    <span>15</span>
                    <h6>Year Experience</h6>
                    </div>
                  </div>
                  </Col>
                  <Col lg='6'>
                    <div className='experience__img'>
                      <img src={experienceImg} alt=""/>
                    </div>
                  </Col>
                  </Row>
                </Container>
              </section>
              {/* =============================experience section end=============================== */}
              {/* ============================gallery section star=============================== */}
              <section>
                <Container>
                  <Row>
                    <Col lg='12'>
                      <Subtitle subtitle={'Gallery'}/>
                      <h2 className='gallery__title'>Visit Our Customers tou gallery</h2>
                    </Col>
                    <Col  lg='12'>
                      <MasonryImagesGallery/>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* ============================gallery section end=============================== */}
              {/* ============================testimonial section start=============================== */}
              <section>
                <Container>
                  <Row>
                    <Col lg='12'>
                      <Subtitle subtitle={'Fans Love'} />
                      <h2 className='testimonial__title'>What our fans says about us</h2>
                    </Col>
                    <Col lg='12'>
                      <Testimonials/>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* ============================testimonial section end=============================== */}
              <Newsletter />
              

  </>
  );
};

export default Home;