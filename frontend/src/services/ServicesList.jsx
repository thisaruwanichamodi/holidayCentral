import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc:"Provides accurate and up-to-date weather information for travel destinations.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc:"Offers knowledgeable and experienced local guides to help travelers explore their destinations.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc:"Tailors travel experiences to meet individual interests, budgets, and schedules.",
    },
]

const ServicesList = () => {
  return (
    <>
    {
    servicesData.map((item, index)=>(
        <Col lg="3" key={index}>
          <ServiceCard item={item} />  
        </Col>
    ))}
    </>

  );
};

export default ServicesList;