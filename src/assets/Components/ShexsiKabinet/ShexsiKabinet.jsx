import React, { useState } from 'react'
import './shexsikabinet.css'
import { useNavigate } from 'react-router-dom';

const ShexsiKabinet = () => {
    const navigate = useNavigate();
    const languages = [
        { code: 'az', name: 'Azərbaycan dili', img: 'https://irshad.az/images/svg-icons/flag-az.svg' },
        { code: 'ru', name: 'Русский язык', img: 'https://irshad.az/images/svg-icons/flag-ru.svg' }
    ];


    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };


    return (
        <div className='shexsikabinet'>
            <div className="shexsikabinet-header">
                <div onClick={() => navigate("/")} className="shexsikabinet-logo">
                    <img src="https://irshad.az/images/svg-icons/white-logo.svg" alt="" />
                </div>
                <div className="shexsikabinet-headerRight">
                    <div className="header-right-img">
                        <img src="https://irshad.az/images/svg-icons/ulduz171-black.svg" alt="" />
                    </div>
                    <div className="language-selector">
                        <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
                            <img src={selectedLanguage.img} alt={selectedLanguage.name} width="20" height="15" />
                            <span>{selectedLanguage.name}</span>
                            <span>▼</span>
                        </button>
                        {isOpen && (
                            <div className="language-dropdown">
                                {languages.map((language) => (
                                    <div key={language.code} className="language-option" onClick={() => handleChange(language)} >
                                        <img src={language.img} alt={language.name} width="20" height="15" />
                                        <span>{language.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="shexsiKabinet-login">
                <div className="shexsikabinet-login-img">
                </div>
                <div className="shexsi-kabinet-login">
                    <h1><a>Giriş</a></h1>    
                    <div class="form-groupp">
                        <div className='form'>
                            <label>Telefon</label>
                        <input name="phone" class="input" type="text" value="" id="mask-num" placeholder="+(994) (00) 000-00-00"></input>
                        </div>
                        <button><span>Daxil ol</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShexsiKabinet
