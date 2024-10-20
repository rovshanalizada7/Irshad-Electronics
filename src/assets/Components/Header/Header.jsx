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
                                    <img style={{ width: "85px", height: "12px" }} src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1429/samsung-wordmark-2.svg" alt="" />
                                </a>
                            </li>
                            <li className='icon-imgs'>
                                <a href="">
                                    <img style={{ width: "85px", height: "27px" }} src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1804/apple-authorized-reseller-seeklogo.svg" alt="" />
                                </a>
                            </li>
                            <li className='icon-imgs'>
                                <a href="">
                                    <img style={{ width: "85px", height: "18px" }} src="https://irshad.az/cdn-cgi/image/width=80,height=80/storage/pages/1810/honor-logo-black.svg" alt="" />
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
                            <img style={{ width: "60px", height: "18px" }} src="https://irshad.az/images/svg-icons/ulduz171-black.svg" alt="" />
                        </a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "24px", height: "16px" }} src="https://irshad.az/images/svg-icons/flag-az.svg" alt="" />
                            <span style={{ fontSize: "13px", margin: "0 8px", fontFamily: "Inter, sans-serif" }}>Azərbaycan dili</span>
                            <ExpandMoreIcon />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <LuUser style={{ fontSize: "19px", margin: "0 8px", fontFamily: "Inter, sans-serif" }} />
                            <span style={{ fontSize: "13px", fontFamily: "Inter, sans-serif" }} class="cabinet-name">Şəxsi kabinet</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="header-bottom">

                <div className="header-bottom-content">
                    <div className="logo" style={{ marginRight: "2rem" }}>
                        <img style={{ width: "109px", height: "49px" }} src="https://irshad.az/images/svg-icons/logo.svg?v=7" alt="" />
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "1rem" }} >
                        <a className='kataloq' href=""><IoMdMenu style={{ fontSize: "22px" }} /> Kataloq</a>
                    </div>

                    <div className="katalog-modal">
  <div
    style={{
      display: "flex",
      flexDirection: "column", 
      position: "absolute",
      left: "6.5%",
      top: "23.5%",
      alignItems: "flex-start", 
      zIndex: "10",
      height: "auto", 
      width: "345px",
      backgroundColor: "#f7f7f7",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      overflowY: "auto",
      maxHeight: "493px",
      scrollbarWidth: "thin",
      padding: "10px" 
    }}
  >
    <ul
      style={{
        fontFamily: "Inter, sans-serif",
        margin: "0", 
        padding: "0", 
        listStyleType: "none", 
        fontSize: "16px",
        fontWeight: "bolder",
        width: "100%", 
      }}
    >
      {[
        { name: "Yalnız online məhsullar", img: "https://irshad.az/images/svg-icons/online.svg" },
        { name: "Telefon və aksessuarlar", img: "https://irshad.az/storage/product-categories/1/1.svg" },
        { name: "Böyük məişət texnikası", img: "https://irshad.az/storage/product-categories/27/icons8-appliances-1-1.svg" },
        { name: "Kiçik məişət texnikası", img: "https://irshad.az/storage/product-categories/2287/icons8-microwave-1.svg" },
        { name: "TV və Audio", img: "https://irshad.az/storage/product-categories/36/3.svg" },
        { name: "Foto texnika", img: "https://irshad.az/storage/product-categories/2288/icons8-camera-1.svg" },
        { name: "Notbuk, planşet və kompüter texnikası", img: "https://irshad.az/storage/product-categories/38/4.svg" },
        { name: "Outlet", img: "https://irshad.az/storage/product-categories/2665/outlet-icon.svg" },
        { name: "Evə uyğun məhsullar", img: "https://irshad.az/storage/product-categories/519/5.svg" },
        { name: "Mebellər və tekstil", img: "https://irshad.az/storage/product-categories/2290/icons8-furniture-1.svg" },
        { name: "Nəqliyyat və Əyləncə", img: "https://irshad.az/storage/product-categories/520/6.svg" },
        { name: "Avtomobil üçün məhsullar", img: "https://irshad.az/storage/product-categories/2280/icons8-fiat-500-1.svg" },
        { name: "İdman və sağlamlıq", img: "https://irshad.az/storage/product-categories/532/8.svg" },
        { name: "İnşaat", img: "https://irshad.az/storage/product-categories/1103/inshaat.svg" },
        { name: "Dəftərxana Ləvazimatları", img: "https://irshad.az/storage/product-categories/2286/icons8-moleskine-1-1.svg" },
        { name: "Musiqi avadanlıqları", img: "https://irshad.az/storage/product-categories/2289/icons8-guitar-1.svg" },
        { name: "Şəxsi əşyalar", img: "https://irshad.az/storage/product-categories/1507/shexsi-eshya.svg" },
        { name: "Zinət əşyaları", img: "https://irshad.az/storage/product-categories/1507/shexsi-eshya.svg" }
      ].map((item, index) => (
        <li
  key={index}
  style={{
    position: "relative",
    padding: "0.8rem 0.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 0.3s ease", 
  }}
  onMouseEnter={(e) => (e.currentTarget.style.dColor = "#f0f0f0")}
  onMouseLeave={(e) => (e.currentTarget.style.dColor = "transparent")}
>
  <img
    src={item.img}
    alt={item.name}
    style={{ width: "24px", height: "24px", marginRight: "10px" }}
  />
  {item.name}
</li>

      ))}
    </ul>
  </div>
</div>





                    <div style={{ position: "relative", marginRight: "2rem" }}>
                        <input className='search-inp' type="text" placeholder='Search' />
                        <IoMdSearch className='search-icon1' style={{ position: "absolute", right: "1rem", top: "1rem", fontSize: "23px", color: "#95979c" }} />
                    </div>
                    <div style={{ width: "409px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }} className="header-tools">

                        <div className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <HiOutlineScale className='tools-icon' style={{ fontSize: "24px" }} />
                            <span style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Müqayisə</span>
                        </div>

                        <div className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <FaRegHeart className='tools-icon' style={{ fontSize: "24px" }} />
                            <span style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Bəyəndim</span>
                        </div>

                        <div className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <LuShoppingCart className='tools-icon' style={{ fontSize: "24px" }} />
                            <span style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Səbət</span>
                        </div>

                        <div className='payment-term' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <FaCreditCard className='credit-card' style={{ fontSize: "16px" }} />
                            <span style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Aylıq ödəniş</span>
                        </div>

                    </div>


                </div>

            </div>

        </header>
    )
}

export default Header