import React, { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import { VscComment } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ product }) => {
    const navigate = useNavigate();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const handleClick = () => {
        // Navigate to the product detail page with the product ID
        navigate(`/product/${product.id}`);
    };


    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isProductInWishlist = wishlist.some(item => item.id === product.id);
        setIsInWishlist(isProductInWishlist);

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = cart.some(item => item.id === product.id);
        setIsInCart(isProductInCart);
    }, [product.id]);

    const handleAddToWishlist = () => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isProductInWishlist = wishlist.find(item => item.id === product.id);

        if (!isProductInWishlist) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            setIsInWishlist(true);
        } else {
            wishlist = wishlist.filter(item => item.id !== product.id);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            setIsInWishlist(false);
        }
    };

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find(item => item.id === product.id);

        if (!productInCart) {
            cart.push({ ...product, quantity: 1 });
        } else {
            productInCart.quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setIsInCart(true);
    };

    const handleGoToCart = () => {
        if (isInCart) {
            navigate("/basket");
        }
    };

    return (
        <div className='card'>
            <div className="toolbar">
                <LiaBalanceScaleSolid className="balance-icon" />
                <FaHeart
                    className={`heart-icon ${isInWishlist ? 'active' : ''}`}
                    onClick={handleAddToWishlist}
                    style={{ color: isInWishlist ? 'red' : 'gray', cursor: 'pointer' }}
                />
            </div>
            <div className="image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-content">
                <span className="category">{product.category}</span>
                <h2 className='product-name'>
                {/* Wrap product name in a clickable span */}
                <a onClick={handleClick} style={{ cursor: 'pointer' }}>
                    {product.name}
                </a>
            </h2>
                <div className="circle"></div>
                <ul className="stars">
                    <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                    <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                    <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                    <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                    <li><img src="https://irshad.az/images/svg-icons/starOrange.svg" alt="" /></li>
                </ul>
                <VscComment style={{ position: "absolute", left: "48%", top: "58%", fontSize: "22px" }} />
                <div className="container">
                    <div className="button1">
                        <TbSmartHome style={{ fontSize: '20px' }} />
                        <span>Stokda var</span>
                    </div>
                    <div className="button2">
                        <span>Faizsiz təklif</span>
                    </div>
                </div>
                <div className="price-and-month">
                    <div className="price">
                        <span>{product.price} AZN</span>
                    </div>
                    <div className="month">
                        <p><span>12</span><span>ay</span></p>
                        <p><span>18</span><span>ay</span></p>
                        <p><span>24</span><span>ay</span></p>
                    </div>
                </div>
                <button
                    className={`cart-button ${isInCart ? 'in-cart' : ''}`}
                    onClick={isInCart ? handleGoToCart : handleAddToCart}
                >
                    <BsCart2 /> {isInCart ? 'Səbətə keç' : 'Səbətə əlavə et'}
                </button>

            </div>
        </div>
    );
};

export default Card;
