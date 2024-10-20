import React from 'react'
import "../Section1/section1.css"
import Carousell from '../Carousel/Carousel'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Carousel/carousel.css"
import ProductCarousel from '../ProductCarousel/ProductCarousel'

const Section1 = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <section className='section1'>

      <div className="section1-content">

        <div className="section1-carousel">
        <Carousell/>
        </div>

        <div className="section1-discount">
        <Carousel>
      <Carousel.Item interval={1500}>
        <ProductCarousel/>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <ProductCarousel/>
      </Carousel.Item>
    </Carousel>
        </div>

      </div>
    
    </section>
  )
}

export default Section1