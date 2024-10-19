import React from 'react'
import "../Section1/section1.css"
import Carousell from '../Carousel/Carousel'

const Section1 = () => {
  return (
    <section className='section1'>

      <div className="section1-content">

        <div className="section1-carousel">
        <Carousell/>
        </div>

        <div className="section1-discount"></div>

      </div>
    
    </section>
  )
}

export default Section1