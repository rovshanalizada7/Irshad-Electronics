
import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-Main">
        <div className="footer-QR">
          <img src="https://irshad.az/images/mobile-qr.png" alt="" />
          <p className="footer-qr-text">
            Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!
          </p>
        </div>
        <div className="footer-properity">
          <div className="footer-sirket">
            <h3>Şirkət</h3>
            <ul>
              <li>
                <a href="">Haqqımızda</a>
              </li>
              <li>
                <a href="">Mağazalar</a>
              </li>
              <li>
                <a href="">Vakansiyalar</a>
              </li>
              <li>
                <a href="">Kampaniyalar</a>
              </li>
              <li>
                <a href="">Şərtlərimiz</a>
              </li>
              <li>
                <a href="">Çatdırılma qaydaları</a>
              </li>
              <li className="f-bonus">
                <a href="">Bonuslardan istifadə qaydaları</a>
              </li>
            </ul>
          </div>
          <div className="footer-musteri">
            <h3>Müştəri üçün</h3>
            <ul>
              <li>
                <a href="">Sual-Cavab</a>
              </li>
              <li>
                <a href="">Hissə-hissə ödəniş</a>
              </li>
              <li>
                <a href="">Məxfilik siyasəti</a>
              </li>
              <li>
                <a href="">Korporativ satışlar</a>
              </li>
              <li>
                <a href="">İstifadə qaydaları</a>
              </li>
              <li>
                <a href="">Bloq</a>
              </li>
              <li>
                <a href="">Şikayət və təkliflər</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <div className="f-elaqe">
            <h3>Əlaqə</h3>
            <div className="f-elaqe-prop">
              <a href=""></a>
               <img
                  src="https://irshad.az/images/svg-icons/ulduz171-white.svg"
                  alt=""
                />
            
              <i class="fa-solid fa-house"></i>
             <span>Əhməd Rəcəbli 1/9,
             Azərbaycan, Bakı şəhəri</span>
            
            </div>
            <hr></hr>
          </div>
          <div className="f-socialmedia">
            <h3>Bizi izləyin</h3>
            <div className="f-social-icons">
           <a href="https://www.facebook.com/irshad0171/"> <i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/irshad/">  <i class="fa-brands fa-instagram"></i></a>
           <a href="https://www.youtube.com/c/irshad"> <i class="fa-brands fa-youtube"></i></a>
           <a href="https://api.whatsapp.com/send?phone=994777770171"> <i class="fa-brands fa-whatsapp"></i></a>
           <a href="https://www.tiktok.com/@irshad.az"> <i class="fa-brands fa-tiktok"></i></a>
          <a href="https://az.linkedin.com/company/irshad">  <i class="fa-brands fa-linkedin"></i></a>
           <a href="https://twitter.com/irshad"> <i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="f-app">

            </div>
          </div>
        </div>
      </div>
      <div className="footer-extra">
      <div className="f-extra-irshad-phooto"> <img src="https://irshad.az/images/svg-icons/footer-logo.svg" alt="" /></div> 
        <div className="f-extra-txt"> İrşad © 2000 - 2024. Bütün hüquqlar qorunur. </div>
        <div className="f-extra-txt2"><p>Site by</p><a href="https://jis.az/">
    <img src="https://irshad.az/images/svg-icons/JIS.svg" alt="" /> <strong>Jeykhun Imanov</strong></a><p>Studio</p>
    </div> 
      </div>
   
    </footer>
  );
};

export default Footer;
