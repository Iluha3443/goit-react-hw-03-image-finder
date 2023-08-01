import React from "react";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import axios from 'axios';

export default class ImageGallery extends React.Component {

    componentDidUpdate(prevProps, prevState) {
       
        if (prevProps === this.props.setSearch) {
            return
        }
        axios.get(`https://pixabay.com/api/?q=${this.props.setSearch}&page=1&key=37292159-607e55aeb61a23e05d40a5fe8&image_type=photo&orientation=horizontal&per_page=12`)
            
            .then()
        .catch(ffff => console.log(ffff))
       
    }
    render() {
        return (
            <>
                <ul className="gallery">

                </ul>
            </>
        )
    }
}