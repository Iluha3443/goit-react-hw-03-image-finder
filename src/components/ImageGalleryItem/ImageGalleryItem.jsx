import React from "react";
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({funcModal, webImg, largeImg }) => {
 
  
   
  return (
  
    
<li  className={css.galleryItem}>
  <img className={css.image} onClick={() => funcModal(largeImg)} src={webImg} alt="Gallery Item"  />
      </li>
      
     )
     
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  funcModal: PropTypes.func,
  webImg: PropTypes.string,
  largeImg: PropTypes.string
}