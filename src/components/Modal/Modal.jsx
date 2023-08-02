import React from "react";
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';

const Modal = ({statusModal,largeImg}) => {
   
    return (
        <div onClick={ statusModal} className={css.Overlay}>
  <div className={css.Modal}>
    <img src={largeImg} alt="Modal-window" />
  </div>
</div>
    )
}

export default Modal;


Modal.propTypes = {
  statusModal: PropTypes.func,
  largeImg: PropTypes.string
}