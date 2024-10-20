import React from 'react'
import "../Row/row.css"
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { CiGift } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BsShop } from "react-icons/bs";

const Row = () => {
  return (
    <section className='section-row'>

        <div className="section-services">

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <BsShop style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}>  49 mağaza  </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <MdOutlinePhoneAndroid style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}>  40 mindən çox seçim  </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <IoMdDoneAll style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}>  Rəsmi zəmanət  </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <CiGift style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}>  Bonus proqramı  </span>
            </div>

            <div className="service1">
              <FiShoppingCart style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

        </div>
        
    </section>
  )
}

export default Row