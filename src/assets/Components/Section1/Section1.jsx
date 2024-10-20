import React from 'react'
import "../Section1/section1.css"
import Carousell from '../Carousel/Carousel'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

const Section1 = () => {
  return (
    <section className='section1'>

      <div className="section1-content">

        <div className="section1-carousel">
        <Carousell/>
        </div>

        <div className="section1-discount">
          <ProductCarousel/>
        </div>

      </div>
    
    </section>
  )
}

export default Section1