import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../SectionFour/SectionFour.css'


const SectionFour = () => {
    const [activeTab, setActiveTab] = useState("product-review");
    return (
        <div className="SectionFour">
            <div className="SectionFour-title">
                <div className="titles">
                    <h2>
                        <a className={activeTab === 'product-review' ? 'active' : ''} onClick={() => setActiveTab('product-review')} > Məhsul icmalı </a>
                        <a className={activeTab === 'youtube-review' ? 'active' : ''} onClick={() => setActiveTab('youtube-review')} >  İrşad Youtube </a>
                    </h2>
                </div>
                <div className="youtube-link">
                    <a href='https://www.youtube.com/c/irshad'><span><FontAwesomeIcon icon={faYoutube} id='youtube' /> Youtube hesabına keç</span></a>
                </div>
            </div>
            <div className="SectionFour-products">
                {activeTab === 'product-review' && (
                    <div className="product-review">
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/BDXkW2yPVPc/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                    <a href='https://www.youtube.com/watch?v=BDXkW2yPVPc&t=1s'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'> Artıq SAMSUNG vaxtıdır.4 MƏHSUL bir arada! </a>
                            <p>Bu dəfəki yenilikləri ancaq icmalımıza sığdıra bilərdik!😍<br /> SAMSUNG Galaxy Z Fold6, Z Flip6, smart saatları və qulaqlığı👌🏻<br />
                                SAMSUNG'un növbəti qatlana bilən Galaxy Z Fold6 və Z Flip6 modelləri Galaxy AI sistemi ilə bütün sərhədləri aşıb!😉<br />
                                İcmalı dinlədikcə anladıq ki, bu sezon Galaxy'də əyləncənin ucu-bucağı görünmüyəcək!🤩
                            </p>
                        </div>
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/ghGySce348c/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                <a href='https://www.youtube.com/watch?v=ghGySce348c&t=1s'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/tixaclardan-yan-kec-mesafeler-gozune-gorunmesin'>  Tıxaclardan yan keç, məsafələr gözünə görünməsin!😎 </a>
                            <p> Həyatın doğru seçimlərlə dolub-daşsın deyə, növbəti məlumat dolu icmalla qarşındayıq!🥳<br />
                                Seçdiyin velosipedi 18 aylıq KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə sənə uyğun ünvandan sifariş edə bilərsən!💚 </p>

                        </div>
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/LdQKD83LV7k/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                <a href='https://www.youtube.com/watch?v=LdQKD83LV7k'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'>  Eşitdik ki, seçim arasında qalmısan.😉 </a>
                            <p> Özümüzü tez çatdırdıq!😍<br />
                                SamsungGalaxyA35 və #SamsungGalaxyA55 5G modelləri ilə yaxından tanış ol, sizə yaxın mağazamıza gələrək və ya onlayn qaydada sifariş edərək sahib ol!💚<br />
                                12 mayadək modelləri #KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə əldə edə bilərsən!🥳<br />
                                ✅Mobil tətbiqdən sifariş et, 2 QAT bonus qazan </p>


                        </div>
                    </div>)}
                {activeTab === 'youtube-review' && (
                    <div className="youtube-review">
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/hH8lAgdCBx8/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                <a href='https://www.youtube.com/watch?v=hH8lAgdCBx8'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'>  Bəli, bəli İRŞAD'ın ekspertləri sizin üçün bölür! 😎  </a>
                        </div>
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/IlcTzdO4phg/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                <a href='https://www.youtube.com/watch?v=IlcTzdO4phg'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'> İrşad yenə də təəccübləndirməyə davam edir!😍 </a>
                        </div>
                        <div className="kart">
                            <div className="img-color-relative">
                                <span role='img'><img src='https://img.youtube.com/vi/-aIi-MOXZwg/maxresdefault.jpg'></img></span>
                                <div class="hover-container">
                                <a href='https://www.youtube.com/watch?v=-aIi-MOXZwg'>
                                    <div class='img-color'></div>
                                    <div class="play-item"></div>
                                    </a>
                                </div>
                            </div>
                            <a href='https://irshad.az/mehsul-icmali/artiq-samsung-vaxtidir4-mehsul-bir-arada'> Honor Premium Zona Əhmədli mağazası  </a>
                        </div>

                    </div>)}
            </div>
        </div>
    )
}

export default SectionFour