import React from 'react'
import Header from '../Header/Header'
import Section1 from '../Section1/Section1'
import Row from '../Row/Row'
import SecTwo from '../Section2/SecTwo'
import SecThree from '../Section3/SecThree'
import SectionFour from '../SectionFour/SectionFour'
import SectionFive from '../SectionFive/SectionFive'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <div>
        <Header/>
        <Section1/>
        <Row/>
        <SecTwo/>
        <SecThree/>
        <SectionFour/>
        <SectionFive/>
        <Footer/>
    </div>
  )
}

export default HomePage