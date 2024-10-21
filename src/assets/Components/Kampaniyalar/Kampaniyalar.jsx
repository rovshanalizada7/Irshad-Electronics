import React from 'react'
import { GoDotFill } from 'react-icons/go'
import './kampaniyalar.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CountdownTimer from '../Timer/Timer';


const Kampaniyalar = () => {
    return (
        <>
        <Header />
        <section className='kampaniyalar'>
            <ul>
                <li><a style={{ color: "#95979c", fontSize: "14px" }} href="">İrşad</a></li>
                <li><a style={{ color: "#232d40", fontSize: "14px" }} href=""><GoDotFill /> Kampaniyalar </a></li>
            </ul>
            <div className="kampaniyalar-main">
                <div className="kampaniyalar-title">
                    <span className='title-span' style={{ color: "#232d40", fontSize: "36px", fontWeight: "600" , fontFamily: 'sans-serif', }}>Kampaniyalar</span>
                </div>
                <div className="kampaniyalar-review">
                    <div className="kampaniya">
                        <img src="https://irshad.az/cdn-cgi/image/width=424/storage/pages/2384/sayt-cover-3.png" alt="" />
                        <div className="kampani-info">
                            <div className="kampaniya-info">
                                <p  className='time-line'>8 Oktyabr - 31 Oktyabr</p>
                                <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'> Elə belə söhbət etmirik, NAĞD SÖHBƏT edirik! 😎 </a>
                            </div>
                            <div className="kampaniya-footer">
                                <a className='kampaniya-time'>
                                    <CountdownTimer/>
                                </a>
                                <a className='kampaniya-about'>Ətraflı <ArrowForwardIosIcon fontSize='14px' className='icon-arrow' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="kampaniya">
                        <img src="https://irshad.az/cdn-cgi/image/width=424/storage/pages/2397/sayt-cover-4-0.png" alt="" />
                        <div className="kampani-info">
                            <div className="kampaniya-info">
                                <p className='time-line'>8 Oktyabr - 31 Oktyabr</p>
                                <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'>  Kredit ekspertlərimiz sizin üçün bölür! 😎  </a>
                            </div>
                            <div className="kampaniya-footer">
                                <a className='kampaniya-time'>
                                    <CountdownTimer/>
                                </a>
                                <a className='kampaniya-about'>Ətraflı <ArrowForwardIosIcon fontSize='14px' className='icon-arrow' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Kampaniyalar
