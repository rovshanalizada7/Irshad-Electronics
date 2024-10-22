import React from 'react';
import './Modal.css'; 

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3 className='h3'>Aylıq ödəniş</h3>
        <div className="payment-options">
          <img style={{width:"174px",height:"49px"}} src="https://irshad.az/images/million.jpeg" alt="Million" />
          <img style={{width:"174px",height:"46px"}} src="https://irshad.az/images/epul.jpeg" alt="Epul" />
          <img style={{width:"173px",height:"95px"}} src="https://irshad.az/images/hesabaz.jpeg" alt="Hesab" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
