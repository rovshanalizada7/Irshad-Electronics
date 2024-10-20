import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LuUser } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineScale } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import "../Header/header.css"

const Header = () => {
  return (
    <header>

        <div className="header-top">
            <div className="header-top-content">

             <nav className='main-nav'>
                <ul>
                    <li>
                        <a className='first3-lists' href=""> Kampaniyalar </a>
                     </li>
                    <li>
                        <a className='first3-lists' href=""> Mağazalar </a>
                    </li>
                    <li>
                        <a className='first3-lists' href=""> Korporativ </a>
                    </li>
                    <li className='icon-imgs'>
                    <a href="">
                        <img  style={{width:"85px",height:"12px"}} src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1429/samsung-wordmark-2.svg" alt="" />
                    </a>
                    </li>
                    <li className='icon-imgs'>
                        <a href="">
                            <img style={{width:"85px",height:"27px"}}  src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1804/apple-authorized-reseller-seeklogo.svg" alt="" />
                        </a>
                    </li>
                    <li className='icon-imgs'>
                        <a href="">
                            <img style={{width:"85px",height:"18px"}} src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1810/honor-logo-black.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className='last-lists' href=""> Outlet </a>
                    </li>
                    <li>
                        <a className='last-lists' href=""> Kondisionerlər </a>
                    </li>
                </ul>
             </nav>

             <div className="header-top-list">
                <a href="">
                    <img style={{width:"60px",height:"18px"}} src="https://irshad.az/images/svg-icons/ulduz171-black.svg" alt="" />
                </a>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img style={{width:"24px",height:"16px"}} src="https://irshad.az/images/svg-icons/flag-az.svg" alt="" />
                    <span style={{fontSize:"13px",margin:"0 8px",fontFamily:"Inter, sans-serif"}}>Azərbaycan dili</span>
                    <ExpandMoreIcon/>
                </div>
                <div style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
                <LuUser style={{fontSize:"19px",margin:"0 8px",fontFamily:"Inter, sans-serif"}} />
                <span style={{fontSize:"13px",fontFamily:"Inter, sans-serif"}} class="cabinet-name">Şəxsi kabinet</span>
                </div>
             </div>

            </div>
        </div>

        <div className="header-bottom">

            <div className="header-bottom-content">
                <div className="logo" style={{marginRight:"2rem"}}>
                    <img style={{width:"109px",height:"49px"}} src="https://irshad.az/images/svg-icons/logo.svg?v=7" alt="" />
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"1rem"}} >
                <a className='kataloq' href=""><IoMdMenu style={{fontSize:"22px"}} /> Kataloq</a>
                </div>
                <div style={{position:"relative",marginRight:"2rem"}}>
                <input  className='search-inp' type="text" placeholder='Search' />
                <IoMdSearch className='search-icon1' style={{position:"absolute",right:"1rem",top:"1rem",fontSize:"23px",color:"#95979c"}} />
                </div>
                <div style={{width:"409px",height:"76px",display:"flex",alignItems:"center",justifyContent:"space-between"}} className="header-tools">

                 <div className='tools' style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}>
                 <HiOutlineScale className='tools-icon' style={{fontSize:"24px"}} />
                 <span style={{fontFamily:"font-family: Inter, sans-serif",fontSize:"14px"}}>Müqayisə</span>
                 </div>

                 <div className='tools' style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}>
                 <FaRegHeart className='tools-icon' style={{fontSize:"24px"}} />
                 <span style={{fontFamily:"font-family: Inter, sans-serif",fontSize:"14px"}}>Bəyəndim</span>
                 </div>

                 <div className='tools' style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}>
                 <LuShoppingCart className='tools-icon' style={{fontSize:"24px"}} />
                 <span style={{fontFamily:"font-family: Inter, sans-serif",fontSize:"14px"}}>Səbət</span>
                 </div>

                 <div className='payment-term' style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}>
                 <FaCreditCard className='credit-card' style={{fontSize:"16px"}} />
                 <span style={{fontFamily:"font-family: Inter, sans-serif",fontSize:"14px"}}>Aylıq ödəniş</span>
                 </div>

                </div>

               
            </div>

        </div>

    </header>
  )
}

export default Header