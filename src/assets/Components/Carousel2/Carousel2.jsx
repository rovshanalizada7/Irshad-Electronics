import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card/Card';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carousel2.css';
import { fetchProducts } from '../API/api'; 

const Carusel = ({ apiUrl }) => { 
    const [products, setProducts] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts(apiUrl);
            setProducts(data);
        };

        getProducts(); 
    }, [apiUrl]); 

    const handleNextSlide = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrevSlide = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    return (
        <div className='products-swip'>
            <div className="button-container">
                <button className="round-button" onClick={handlePrevSlide}>
                    <FaArrowLeft />
                </button>
                <button className="round-button" onClick={handleNextSlide}>
                    <FaArrowRight />
                </button>
            </div>

            <div className="swip">
                {products.length > 0 ? (
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={0}
                        slidesPerView={4}
                        loop={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Card product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>Məhsullar yüklənir...</p>
                )}
            </div>
        </div>
    );
};

export default Carusel;