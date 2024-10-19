import React from 'react'
import "../Row/row.css"
import { TbTruckDelivery } from "react-icons/tb";

const Row = () => {
  return (
    <section className='section-row'>

        <div className="section-services">

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1" style={{borderRight:"1px solid #ccc"}}>
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

            <div className="service1">
              <TbTruckDelivery style={{fontSize:"40px",color:"#40b659"}} />
              <span style={{fontSize:"17px"}}> Sürətli çatdırılma </span>
            </div>

        </div>
        
    </section>
  )
}

export default Row