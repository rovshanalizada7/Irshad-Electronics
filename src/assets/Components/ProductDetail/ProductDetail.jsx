import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbSmartHome } from 'react-icons/tb';
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { TbScale } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { fetchProducts } from '../API/api';
import './detail.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProducts(`https://6714c8de690bf212c7627430.mockapi.io/phones/${id}`);
            setProduct(data);
        };

        getProduct();
    }, [id]);

    if (!product) {
        return <div>Yüklənir...</div>;
    }

    

    return (
        <>
            <Header />
            <div className='detail-container'>
                <div className="top">
                    <h1>{product.name}</h1>
                    <div className="button1">
                        <TbSmartHome style={{ fontSize: '20px' }} />
                        <span>Stokda var</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="little-img">
                        <img src={product.image} alt={product.name} /> {/* Məhsulun kiçik şəkli */}
                    </div>
                    <div className="product-img">
                        <img src={product.image} alt={product.name} /> {/* Məhsulun əsas şəkli */}
                    </div>
                    <div className="product-wiev">
                        <div className="button2">
                            <span>Faizsiz təklif</span>
                        </div>
                        <div className="green">
                            <div className="button3">
                                <span>Nağd alışda 7 AZN bonus</span>
                            </div>
                            <div className="button3">
                                <span>Hissəli alışda 0.7 AZN bonus</span>
                            </div>
                        </div>
                        <div className="share">
                            <div className="scale">
                                <TbScale />
                            </div>
                            <div className="heart">
                                <FaHeart />
                            </div>
                            <div className="share-icon">
                                <IoShareSocial /> <span>Paylaş</span>
                            </div>
                        </div>
                        <div className="product-pin">
                            <span>Malın kodu: 91119</span> {/* Məhsul kodu */}
                        </div>
                        <ul className="stars">
                            <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                            <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                            <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                            <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                            <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                        </ul>
                    </div>

                    <div className="buy-changes">
                        <div className="buy">
                            <span>{product.price} AZN</span> {/* Qiymət */}
                            <button className="clickle-al">
                                Bir kliklə al
                            </button>
                            <button className="sebet">
                                <SlBasket />
                            </button>
                        </div>
                        
                    </div>



                </div>
                <div className="properties">
                    <h2 style={{
                        color: '#666666',
                        fontSize: '20px',
                        marginBottom: '10px'
                    }}>Xüsusiyyətlər:</h2>
                    <div className="features">

                        <p><b>Ad:</b><span> {product.name}</span></p>
                        <p><b>Model:</b><span> {product.brand}</span></p>
                        <p><b>Marka:</b><span> {product.brand}</span></p>
                        <p><b>Ekran:</b><span> {product.features.screen_size}</span></p>
                        <p><b>Yaddaş:</b><span> {product.features.storage}</span></p>
                        <p><b>Kamera:</b><span> {product.features.camera}</span></p>
                        <p><b>Batareya həcmi:</b><span> {product.features.battery}</span></p>
                        
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
