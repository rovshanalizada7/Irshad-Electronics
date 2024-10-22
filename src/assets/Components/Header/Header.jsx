import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LuUser } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineScale } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import "../Header/header.css"
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Header = () => {
    const navigate = useNavigate();
    const [wishlistCount, setWishlistCount] = useState(0);
    const [basketCount, setBasketCount] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('wishlist'))?.length || 0;
        setWishlistCount(count);
    }, []);

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('cart'))?.length || 0;
        setBasketCount(count);
    }, []);
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        fontFamily: 'Arial, sans-serif',

    };

    const columnStyle = {
        flexBasis: '20%',
        margin: '20px',
        padding: '20px',

    };

    const headerStyle = {
        fontSize: '13px',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'uppercase',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: '0',
        fontSize: '13px',
        color: '#666',
    };

    const listItemStyle = {
        marginBottom: '5px',
        color: '#555',
        cursor: 'pointer',
        transition: 'color 0.2s',
    };

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };



    const placeholders = "Apple, Samsung, Televizor, Soyuducu, Notbuk, Printer";
    const placeholderWords = placeholders.split(", ");
    const [currentText, setCurrentText] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);
  
    useEffect(() => {
      const currentWord = placeholderWords[placeholderIndex];
  
     
      const handleTyping = () => {
        if (isDeleting) {
          if (letterIndex > 0) {
            setCurrentText(currentWord.substring(0, letterIndex - 1));
            setLetterIndex(letterIndex - 1);
          } else {
            setIsDeleting(false);
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderWords.length);
          }
        } else {
          if (letterIndex < currentWord.length) {
            setCurrentText(currentWord.substring(0, letterIndex + 1));
            setLetterIndex(letterIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000); 
          }
        }
      };
  
      const timeout = setTimeout(handleTyping, isDeleting ? 100 : 200);
  
      return () => clearTimeout(timeout); 
    }, [currentText, isDeleting, letterIndex, placeholderIndex, placeholderWords]);


    return (

        <header>

            <div className="header-top">
                <div className="header-top-content">

                    <nav className='main-nav'>
                        <ul>
                            <li>
                                <a onClick={() => navigate("/kampaniyalar")} className='first3-lists' href=""> Kampaniyalar </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/magazalar")} className='first3-lists' href=""> Mağazalar </a>
                            </li>
                            <li>
                                <a onClick={() => navigate("/korporativ")} className='first3-lists' href=""> Korporativ </a>
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

                        <div id='change-lang' className='l' style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "24px", height: "16px" }} src="https://irshad.az/images/svg-icons/flag-az.svg" alt="" />
                            <span className='azerbaijan-lang' style={{ fontSize: "13px", margin: "0 8px", fontFamily: "Inter, sans-serif" }}>Azərbaycan dili</span>
                            <ExpandMoreIcon />

                           
                           <div className='russian-lang' >
                            <img style={{ width: "24px", height: "22px" }} src="https://irshad.az/images/svg-icons/flag-ru.svg" alt="" />
                            <span style={{ fontSize: "13px", margin: "0 8px", fontFamily: "Inter, sans-serif",padding:"5px 0" }}>Русский язык</span>
                            </div>
                           

                        </div>

                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <LuUser style={{ fontSize: "19px", margin: "0 8px", fontFamily: "Inter, sans-serif" }} />
                            <span onClick={() => navigate("/girish")} style={{ fontSize: "13px", fontFamily: "Inter, sans-serif" }} className="cabinet-name">Şəxsi kabinet</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="header-bottom">

                <div className="header-bottom-content">
                    <div onClick={() => navigate("/")} className="logo" style={{ marginRight: "2rem", cursor: "pointer" }}>
                        <img style={{ width: "109px", height: "49px" }} src="https://irshad.az/images/svg-icons/logo.svg?v=7" alt="" />
                    </div>

                    <div>
                        <div
                            id='kataloqClick'
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1rem' }}
                            onClick={toggleModal}
                        >
                            <a className='kataloq' href="#"><IoMdMenu style={{ fontSize: '22px' }} /> Kataloq</a>
                        </div>

                        {isModalOpen && (
                            <div className="katalog-modal">
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "absolute",
                                        left: "6.5%",
                                        top: "23%",
                                        alignItems: "flex-start",
                                        zIndex: "10",
                                        height: "auto",
                                        width: "345px",
                                        backgroundColor: "#f7f7f7",
                                        borderRadius: "5px",
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
                                                onMouseEnter={() => handleMouseEnter(item.name)}
                                                onMouseLeave={handleMouseLeave}
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
                        )}

                        {isHovering && (
                            <div
                                className="hover-catalog"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "absolute",
                                    left: "29.1%",
                                    top: "23%",
                                    alignItems: "flex-start",
                                    zIndex: "10",
                                    height: "493px",
                                    width: "1000px",
                                    backgroundColor: "#f7f7f7",
                                    overflowY: "auto",
                                    maxHeight: "493px",
                                    scrollbarWidth: "thin",
                                    padding: "10px"
                                }}
                            >
                                <div style={containerStyle}>
                                    <div style={columnStyle}>
                                        <h3 style={headerStyle}>Mobil telefonlar</h3>
                                        <ul style={listStyle}>
                                            {['Apple', 'HONOR', 'Samsung', 'Xiaomi', 'Poco', 'Nokia', 'Oppo', 'Itel', 'F+', 'TCL', 'Infinix', 'Motorola', 'Blackview', 'Energizer'].map((item, index) => (
                                                <li key={index} style={listItemStyle}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={columnStyle}>
                                        <h3 style={headerStyle}>Telefon aksesuarları</h3>
                                        <ul style={listStyle}>
                                            {['Adapter USB', 'Adapter simsiz', 'Telefon qabları', 'Ekran Qoruyucu', 'Yaddaş kartı', 'Power Bank', 'USB', 'Açarlıq', 'Stilus', 'Monopod', 'Nömrə ötürücü', 'Qulaqlıq qabları', 'Ştativli Led işıq', 'Mikrofon'].map((item, index) => (
                                                <li key={index} style={listItemStyle}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={columnStyle}>
                                        <h3 style={headerStyle}>Qulaqlıqlar</h3>
                                        <ul style={listStyle}>
                                            {['Apple', 'Samsung', 'Xiaomi', 'HONOR', 'A4tech', 'Baseus', 'Beats', 'Celebrat', 'JBL', 'Marshall', 'Porodo', 'QCY', 'Remax', 'Skullcandy', 'TCL'].map((item, index) => (
                                                <li key={index} style={listItemStyle}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={columnStyle}>
                                        <h3 style={headerStyle}>Smart saatlar</h3>
                                        <ul style={listStyle}>
                                            {['Apple', 'Samsung', 'HONOR', 'Xiaomi', 'Haylou', 'Mibro', 'Wonlex'].map((item, index) => (
                                                <li key={index} style={listItemStyle}>{item}</li>
                                            ))}
                                        </ul>

                                        <h3 style={headerStyle}>Qolbaqlar</h3>
                                        <ul style={listStyle}>
                                            {['Samsung', 'Xiaomi', 'HONOR'].map((item, index) => (
                                                <li key={index} style={listItemStyle}>{item}</li>
                                            ))}
                                        </ul>

                                        <h3 style={headerStyle}>Stasionar telefonlar</h3>
                                        <ul style={listStyle}>
                                            <li style={listItemStyle}>Panasonic</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="hover-catalog" style={{
                        display: "none",
                        flexDirection: "column",
                        position: "absolute",
                        left: "29.1%",
                        top: "23%",
                        alignItems: "flex-start",
                        zIndex: "10",
                        height: "493px",
                        width: "1000px",
                        backgroundColor: "#f7f7f7",
                        overflowY: "auto",
                        maxHeight: "493px",
                        scrollbarWidth: "thin",
                        padding: "10px"
                    }}>

                        <div style={containerStyle}>
                            <div style={columnStyle}>
                                <h3 style={headerStyle}>Mobil telefonlar</h3>
                                <ul style={listStyle}>
                                    {['Apple', 'HONOR', 'Samsung', 'Xiaomi', 'Poco', 'Nokia', 'Oppo', 'Itel', 'F+', 'TCL', 'Infinix', 'Motorola', 'Blackview', 'Energizer'].map((item, index) => (
                                        <li key={index} style={listItemStyle}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div style={columnStyle}>
                                <h3 style={headerStyle}>Telefon aksesuarları</h3>
                                <ul style={listStyle}>
                                    {['Adapter USB', 'Adapter simsiz', 'Telefon qabları', 'Ekran Qoruyucu', 'Yaddaş kartı', 'Power Bank', 'USB', 'Açarlıq', 'Stilus', 'Monopod', 'Nömrə ötürücü', 'Qulaqlıq qabları', 'Ştativli Led işıq', 'Mikrofon'].map((item, index) => (
                                        <li key={index} style={listItemStyle}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div style={columnStyle}>
                                <h3 style={headerStyle}>Qulaqlıqlar</h3>
                                <ul style={listStyle}>
                                    {['Apple', 'Samsung', 'Xiaomi', 'HONOR', 'A4tech', 'Baseus', 'Beats', 'Celebrat', 'JBL', 'Marshall', 'Porodo', 'QCY', 'Remax', 'Skullcandy', 'TCL'].map((item, index) => (
                                        <li key={index} style={listItemStyle}>{item}</li>
                                    ))}
                                </ul>

                            </div>



                            <div style={columnStyle}>
                                <h3 style={headerStyle}>Smart saatlar</h3>
                                <ul style={listStyle}>
                                    {['Apple', 'Samsung', 'HONOR', 'Xiaomi', 'Haylou', 'Mibro', 'Wonlex'].map((item, index) => (
                                        <li key={index} style={listItemStyle}>{item}</li>
                                    ))}
                                </ul>
                                <h3 style={headerStyle}>Qolbaqlar</h3>
                                <ul style={listStyle}>
                                    {['Samsung', 'Xiaomi', 'HONOR'].map((item, index) => (
                                        <li key={index} style={listItemStyle}>{item}</li>
                                    ))}
                                </ul>
                                <h3 style={headerStyle}>Stasionar telefonlar</h3>
                                <ul style={listStyle}>
                                    <li style={listItemStyle}>Panasonic</li>
                                </ul>
                            </div>


                        </div>
                    </div>



                    <div style={{ position: "relative", marginRight: "2rem" }}>
                        <input data-placeholders={placeholders} autocomplete="off" className='search-inp' type="text" placeholder={currentText} />
                        <IoMdSearch className='search-icon1' style={{ position: "absolute", right: "1rem", top: "1rem", fontSize: "23px", color: "#95979c" }} />
                    </div>
                    <div style={{ width: "409px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }} className="header-tools">

                        <div className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <HiOutlineScale className='tools-icon' style={{ fontSize: "24px" }} />
                            <span className='compare-like' style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Müqayisə</span>
                        </div>

                        <div onClick={() => navigate("/wishList")} className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", position: "relative" }}>
                            {wishlistCount > 0 ? (
                                <FaRegHeart className='tools-icon' style={{ fontSize: "24px" }} />
                            ) : (
                                <FaRegHeart className='tools-icon' style={{ fontSize: "24px" }} />
                            )}
                            <span className='compare-like' style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>Bəyəndim</span>
                            {wishlistCount > 0 && (
                                <span className="wishlist-count" style={{
                                    position: "absolute",
                                    top: "-7px",
                                    right: "10px",
                                    backgroundColor: "orange",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: "18px",
                                    height: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px"
                                }}>
                                    {wishlistCount}
                                </span>
                            )}
                        </div>

                        <div onClick={() => navigate("/basket")} className='tools' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", position: "relative" }}>
                            <LuShoppingCart className='tools-icon' style={{ fontSize: "24px" }} />
                            <span className='compare-like' style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}>Səbət</span>
                            {basketCount > 0 && (
                                <span className="basket-count" style={{
                                    position: "absolute",
                                    top: "-7px",
                                    right: "-5px",
                                    backgroundColor: "orange",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: "18px",
                                    height: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px"
                                }}>
                                    {basketCount}
                                </span>
                            )}
                        </div>


                        <div onClick={handleOpenModal}  className='payment-term' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                            <FaCreditCard className='credit-card' style={{ fontSize: "16px" }} />
                            <span className='monthly-payment'  style={{ fontFamily: "font-family: Inter, sans-serif", fontSize: "14px" }}>Aylıq ödəniş</span>
                        </div>
                        <Modal show={showModal} onClose={handleCloseModal} />

                    </div>


                </div>

            </div>

        </header>
    )
}

export default Header