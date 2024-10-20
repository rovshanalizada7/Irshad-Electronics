import React from 'react';
import { FaHeart } from "react-icons/fa";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import { VscComment } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import './card.css';

const Card = ({ product }) => {
    return (
        <div className='card'>
            <div className="toolbar">
                <LiaBalanceScaleSolid className="balance-icon" />
                <FaHeart className='heart-icon'/>
            </div>
            <div className="image">
                <img src={product.image} alt={product.title} /> 
            </div>
            <div className="product-content">
                <span className="category">{product.category}</span> 
                <h2 className='product-name'>
                    <a href="">{product.title}</a> 
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
                        <span>${product.price}</span> 
                    </div>
                    <div className="month">
                        <p><span>12</span><span>ay</span></p>
                        <p><span>18</span><span>ay</span></p>
                        <p><span>24</span><span>ay</span></p>
                    </div>
                </div>
                <button><BsCart2 /> Səbətə əlavə et</button>
            </div>
        </div>
    );
};

export default Card;