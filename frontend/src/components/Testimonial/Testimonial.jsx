import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials =()=>{
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1,                
            },
        },

        ]

    }
    return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>HolidayCenteral was incredibly knowledgeable about 
                the destinations we were interested in, and they 
                provided us with excellent recommendations for 
                accommodations and activities that exceeded our 
                expectations.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            
            </div>
        </div>
        <div className="testimonial py-4 px-3">
             <p>HolidayCenteral took the time to understand our 
                unique needs and preferences, and they crafted 
                an itinerary that perfectly matched our interests. 
                We felt like we had a truly personalized and 
                unforgettable travel experience.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            
            </div>
        </div>
        <div className="testimonial py-4 px-3">
             <p>HolidaCentral was always available to answer our 
                questions and provide support throughout the 
                booking process. They were proactive in communicating 
                any updates or changes, which gave us peace of mind 
                and made us feel valued as customers.

            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            
            </div>
        </div>
        <div className="testimonial py-4 px-3">
             <p>Booking with HolidaCentral was so convenient and hassle-free. 
                They took care of all the details, from flights and 
                accommodations to transportation and activities, so we 
                could just sit back and enjoy our vacation. We would
                 definitely recommend them to anyone looking for a 
                 stress-free travel experience.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            
            </div>
        </div>
    </Slider>
    );
    };
    
    export default Testimonials;
