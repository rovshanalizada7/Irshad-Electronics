import React from 'react'
import "./Magazalar.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Magazalar = () => {
  return (
    <>
    <Header/>
    <section className='magazalar'>
      <div className="magazalar-top">
        <h1 className='magazalar-h1'>Mağazalarımız</h1>
      </div>
      <div className="map-magaza">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9888993989384!2d49.857843384882834!3d40.40909669780303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d71ca1faf43%3A0x6716e4a2f41ef2e3!2sIrshad%2C%20Ba%C5%9F%20Ofis!5e0!3m2!1str!2saz!4v1729601461769!5m2!1str!2saz"
          width="1500"
          height="600"
          className='map-iframe'
          title='Responsive google Map'
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Magazalar
