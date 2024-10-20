import React from 'react'
import "../ProductCarousel/productCarousel.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import CountdownTimer from '../Timer/Timer';

const ProductCarousel = () => {
  return (
    <div className='product-card'>

        <div className="product-title">
            <span style={{fontWeight:"600"}} >Həftənin təklifi</span>
            <span style={{fontWeight:"600"}}><CountdownTimer/></span>
        </div>

        <div className="product-info">
            <div className="info-content">

                <div className="content-top">
                    <h3> HONOR 200 8 GB / 256 GB <br /> Emerald Green </h3>
                    <img src="	https://irshad.az/storage/product-attributes/35/brand-lenovo.svg" alt="" />
                </div>

            <div className="content-middle">
                <img style={{height:"184px",width:"184px"}} src="	https://irshad.az/cdn-cgi/image/width=315/storage/products/99095/82v700e7ps.png" alt="" />
                <div style={{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"end",gap:"10px"}}>
                <div class="product__label product__label--purple"> <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"> <use xlink:href="#svg-stok"></use> </svg>💒 Stokda var </div>
                <div style={{textAlign:"end"}} class="product__label product__label--orange"> - 250 AZN nağd alışda endirim </div>
                <div class="product__label product__label--purple"> Faizsiz təklif </div>
                </div>
            </div>

            <div className="content-bottom">
              <div class="prod-info__bottom__price">
                 <span class="old-price">599.99 AZN</span>
                  <p class="new-price">549.99 AZN</p> 
              </div>
              <div className="bottom-btns">
                <a className='one-click' href=""> 👆 Bir kliklə al </a>
                <a className='shopping' href=""><MdOutlineShoppingCart style={{fontSize:"25px"}} /></a>
              </div>
            </div>

            </div>
        </div>

    </div>
  )
}

export default ProductCarousel