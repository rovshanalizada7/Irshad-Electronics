import React from 'react'
import './three.css'
import Carousel2 from '../Carousel2/Carousel2'

const SecThree = () => {
    return (
        <section className='discounted-swip'>
            <div className="discounted-products">
                <div className="title">
                    <a className='popular' href="">Çox satılanlar</a>
                    <a className='new' href="">Endirimli məhsullar</a>
                </div>
                <Carousel2 apiUrl={"https://6714c8de690bf212c7627430.mockapi.io/phones"}/>
            </div>
        </section>
    )
}

export default SecThree