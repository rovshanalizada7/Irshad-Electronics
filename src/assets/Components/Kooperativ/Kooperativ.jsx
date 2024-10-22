import React from 'react'
import './kooperativ.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Kooperativ = () => {
    return (
        <>
        <Header/>
        <section className='kooperativ'>
            <div className="kooperativ-container">
                <div className="title-kooperativ">Korporativ</div>
                <div className="main-kooperativ">
                    <div className="irshad-korporativ">
                        <h3>İrşad Korporativ şöbəsi ölkənin bir çox tanınmış şirkətləri ilə əməkdaşlıq edir. Ümumilikdə 2500-dən çox şirkət, publik hüquqi şəxslər, dövlət qurumlarını əhatə edən əməkdaşlıq çərçivəsində Korporativ şöbə müştərilərinə xüsusi həssaslıqla yanaşır.</h3>
                    </div>
                    <div className="korporativ-ustunlukler">
                        <p><strong>Korporativ üstünlüklərimiz:</strong></p>
                    </div>
                    <div className="qiymet-strategiya">
                        <p><strong>Qiymət strategiyası:</strong> Korporativ müştərilər daim Korporativ seqmentə xas olan xüsusi endirimlərdən yararlana bilirlər.</p>
                        <p><strong>Xidmət:</strong> Korporativ müştərilər servis xidmətlərindən növbəsiz yararlana bilirlər.</p>
                        <p><strong>Ödəmə şərtləri:</strong> Uzun müddət birgə çalışdığımız partnyorlara sonradan ödəmə imkanı yaradaraq xüsusi limitin ayrılması <br /> mümkündür.</p>
                        <p><strong>Şəxsi menecer:</strong> Korporativ Müştərilər fəaliyyət göstərdikləri sektorlara uyğun olaraq bütün sorğu və müraciətləri onlara<br /> təhkim olunmuş menecer üzərindən həyata keçirə bilərlər.</p>
                        <p><strong>Çatdırılma:</strong> Korporativ Müştərilər üçün çatdırılma müştəriyə uyğun qrafikdə həyata keçirilir.</p>
                    </div>
                    <div className="size-tekliflerimiz">
                        <p><strong>Sizə təkliflərimiz:</strong></p>
                    </div>
                    <div className="kocurme-yolu">
                        <p>Köçürmə yolu ilə ödəniş edə bilmək imkanı</p>
                        <p>Korporativ müştərilərə xüsusi endirimlər</p>
                        <p>Seçilmiş müştərilərə hissəli ödəniş imkanı</p>
                        <p>Zəng,elektron poçt üzərindən sifariş vermə imkanı</p>
                        <p>Öncədən sifariş etməklə saytımızda əks olunmayan malların əldə edə bilmə imkanı</p>
                        <p>Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:</p>
                    </div>
                    <div className="elaqe">
                        <p><strong>Əlaqə:</strong></p>
                    </div>
                    <div className="numbers">
                        <a> +994553008784</a>
                        <a> +994552052686</a>
                    </div>
                    <div className="poct-unvani">
                        <p>
                            <strong> Poçt ünvanımız:</strong><a>corp@irshad.az    </a>
                        </p>
                    </div>
                    <div className="img">
                        <img src="https://irshad.az/storage/600x600.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div class="form-container">
                <h1>Bizə yazın</h1>
                <form>
                    <div className="form-1">
                        <div class="form-group">
                            <label for="name">Ad soyad</label>
                            <input type="text" id="name" placeholder="Ad" />
                        </div>
                        <div class="form-group">
                            <label for="phone">Əlaqə nömrəsi</label>
                            <input type="tel" id="phone" placeholder="Əlaqə nömrəsi" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="shirket">
                        <div class="form-group">
                            <label for="company">Şirkət</label>
                            <input type="text" id="company" placeholder="Şirkət" />
                        </div>
                        <div class="form-group">
                            <label for="time">Sizə nə zaman zəng edək</label>
                            <select id="time">
                                <option value="10:00-11:00">10:00-11:00</option>
                                <option value="11:00-12:00">11:00-12:00</option>
                                <option value="12:00-13:00">12:00-13:00</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">İsmarıc</label>
                        <textarea id="message" placeholder="İsmarıc" rows="5"></textarea>
                    </div>
                    <div className="buttonnn">
                    <button type="submit" className='submit'>Təsdiq et</button>
                    </div>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Kooperativ
