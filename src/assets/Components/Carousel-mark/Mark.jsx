import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './mark.css';

const Mark = () => {
    return (
        <div className='mark-slide'>
            <div className="swip-2">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={6}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 4995,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}>

                    <SwiperSlide>
                        <div className="mark-img">
                            <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4956/dahua-technology-logosvg.png" alt="image 1" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/2487/800px-dell-logosvg.png" alt="image 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4494/edifier-logo-2016.jpg" alt="image 3" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/635/electrolux-logo.png" alt="image 4" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3999/2560px-epson-logosvg.png" alt="image 5" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/4947/2023-03-19-090639-39-logo-eurogold-900.jpg" alt="image 6" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/5144/faber-castell-logo-b6b13fc4a1-seeklogocom.png" alt="image 7" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/3435/2560px-fujifilm-logosvg.png" alt="image 8" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/835/gastro-magasin-logo-320x320.png" alt="image 9" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/1944/logo-light.png" alt="image 10" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/272/logo01.png" alt="image 11" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mark-img">
                        <img src="https://irshad.az/cdn-cgi/image/width=201,height=90/storage/product-attributes/573/hisense-logo.jpg" alt="image 12" />
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Mark;