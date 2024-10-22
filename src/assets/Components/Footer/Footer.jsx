import React, { useEffect, useRef, useState } from 'react'
import { FaHouse } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import play from './apps/image-play.png';
import app from './apps/image-app.png';


import './footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05, 
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={isVisible ? 'animate' : ''}>
      <div className="circle"></div>
      <div className="foot-container">
        <div className="foot-qr">
          <img src="https://irshad.az/images/mobile-qr.png" alt="" />
          <p className="foot-qr-text">
            Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!
          </p>
        </div>

        <div className="foot-center" >
          <div className="left" >
            <h3>Şirkət</h3>
            <ul>
              <li><a href="">Haqqımızda</a></li>
              <li><a onClick={() => navigate("/magazalar")} href="">Mağazalar</a></li>
              <li><a href="">Vakansiyalar</a></li>
              <li><a onClick={() => navigate("/kampaniyalar")} href="">Kampaniyalar</a></li>
              <li><a href="">Şərtlərimiz</a></li>
              <li><a href="">Çatdırılma qaydaları</a></li>
              <li><a href="">Bonuslardan istifadə qaydaları</a></li>
            </ul>
          </div>
          <div className="right">
            <h3>Müştəri üçün</h3>
            <ul>
              <li><a href="" onClick={() => navigate("/sual&cavab")}>Sual-Cavab</a></li>
              <li><a href="">Hissə-hissə ödəniş</a></li>
              <li><a href="">Məxfilik siyasəti</a></li>
              <li><a onClick={() => navigate("/korporativ")} href="">Korporativ satışlar</a></li>
              <li><a href="">İstifadə qaydaları</a></li>
              <li><a href="">Bloq</a></li>
              <li><a href="" onClick={() => navigate("/shikayet&ve&teklifler")}>Şikayət və təkliflər</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-right">
          <div className="tel">
            <h3>Əlaqə</h3>
            <div className="right-cont">
              <img src="https://irshad.az/images/svg-icons/ulduz171-white.svg" alt="" />
              <a href="#"><FaHouse style={{
                fontSize: '24px',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '10px',
                border: '1px solid',
                borderRadius: '50%',
              }} /></a>
              <p>Əhməd Rəcəbli 1/9, Azərbaycan, Bakı şəhəri</p>
            </div>
          </div>

          <div className="social">
            <h3>Bizi izləyin</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/irshad0171/"><CiFacebook /></a>
              <a href="https://www.whatsapp.com/send?phone=994777770171"><FaWhatsapp /></a>
              <a href="https://www.tiktok.com/@irshad.az"><FaTiktok /></a>
              <a href="https://www.linkedin.com/company/irshad"><CiLinkedin /></a>
              <a href="https://www.instagram.com/irshad/"><FaInstagram /></a>
              <a href="https://www.telegram.org/#/im?p=tg%3Fstart%3D-1001419786246"><FaTelegramPlane /></a>
              <a href="https://twitter.com/irshad"><TfiTwitter /></a>
              <a href="https://www.youtube.com/c/irshad"><TfiYoutube /></a>
            </div>
            <div className="apps">
              <a href="https://play.google.com/store/apps/details?id=az.irshad.irshad&hl=en&gl=US"><img src={play} alt="play" style={{
                width: '136px',
                height: '50px'
              }} /></a>
              <a href="https://apps.apple.com/tr/app/irshad-az/id1645503622"><img src={app} alt="app" style={{
                width: '136px',
                height: '67px'
              }} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <img src="https://irshad.az/images/svg-icons/footer-logo.svg" alt="" style={{
          width: '91px',
          height: '40px',
          marginLeft: '15px'
        }}/>
        <p>İrşad © 2000 - 2024. Bütün hüquqlar qorunur.</p>
        <p>Site by <img src="https://irshad.az/images/svg-icons/JIS.svg" alt="" style={{
          width: '20px',
          height: '20px',
          marginLeft: '5px'
        }}/> <a href="https://jis.az/">Jeykhun Imanov</a> Studio</p>
      </div>
    </footer>
  )
}

export default Footer
