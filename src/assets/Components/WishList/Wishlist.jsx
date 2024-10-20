import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { GoDotFill } from "react-icons/go";
import BasicRating from '../Rating/Rating';
import { LiaWarehouseSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import '../WishList/wishList.css';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter(item => item.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    };

    return (
        <div>
            <Header />
            <section className='favorites-section'>
                <ul>
                    <li><a style={{ color: "#95979c", fontSize: "14px" }} href="">İrşad</a></li>
                    <li><a style={{ color: "#232d40", fontSize: "14px" }} href=""><GoDotFill /> Bəyəndiklərim </a></li>
                </ul>

                <div className="favorite-top">
                    <span style={{ color: "#232d40", fontSize: "28px" }}>Bəyəndiklərim</span>
                    <a className='addToBasket' href=""><MdOutlineShoppingCart style={{ fontSize: "23px" }} /> Bütün məhsulları səbətə əlavə et </a>
                </div>

                {wishlist.length === 0 ? (
                    <p>Wishlist is empty</p>
                ) : (
                    wishlist.map(product => (
                        <div key={product.id} className="favorite-product">
                            <div className="favorite-product-content">
                                <div className="product-image">
                                    <img style={{ height: "100%" }} src={product.image} alt={product.name} />
                                </div>
                                <div className="product-details">
                                    <h4>{product.name}</h4>
                                    <span><BasicRating /></span>
                                </div>
                                <div className='product-price'>
                                    <span><LiaWarehouseSolid style={{ fontSize: "15px" }} /> Stokda var</span>
                                    <FaHeart style={{ color: "red", fontSize: "22px", marginLeft: "1.7rem", cursor: "pointer" }} onClick={() => removeFromWishlist(product.id)} />
                                    <div>
                                        <span style={{ color: "#1743df", background: "rgba(23,67,223,.07)" }}> Faizsiz təklif </span>
                                    </div>
                                    <div>
                                        <p className='old-price'>3049.99AZN</p>
                                        <p className='new-price'>{product.price} AZN</p>
                                    </div>
                                    <button><MdOutlineShoppingCart style={{ fontSize: "25px" }} /> Səbətə əlavə et</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
            <Footer />
        </div>
    );
};

export default Wishlist;
