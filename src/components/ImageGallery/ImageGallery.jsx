import React from "react";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from "../Button/Button";
import Loader from '../Loader/Loader'
import Modal from '../Modal/Modal'

export default class ImageGallery extends React.Component {

    state = {
        result: [],
        page: 1,
        loading: false,
        isModal: false,
        largeImg: ''
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.setSearch !== this.props.setSearch) {
            this.setState({loading: true, page: 1 , result:[]})
        }
    
        if (prevProps.setSearch !== this.props.setSearch || prevState.page !== this.state.page) {
            this.setState({loading: true})
             axios.get(`https://pixabay.com/api/?q=${this.props.setSearch}&page=${this.state.page}&key=37292159-607e55aeb61a23e05d40a5fe8&image_type=photo&orientation=horizontal&per_page=12`)
               .then(res => this.setState(prevState => ({ result: [...prevState.result, ...res.data.hits],loading: false })))    
                .catch(error => console.log(error))
        }
    };

    handleKeyDown = e => {
     if (e.code === 'Escape') {
                 this.setState({ isModal: false })
            }
    }

    clickOnLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    };

    isOpenModal = (largeImg) => {
        this.setState({ isModal: true, largeImg })
    };

    CloseModal = (e) => {
        if (e.currentTarget === e.target) {
             this.setState({ isModal: false })
         }
       
  }

    render() {
        const { result, loading, isModal, largeImg } = this.state;
        return (
            <>
            <ul className={css.gallery}>
                {loading && <Loader />} 
                {result.map(obj => (  
                    <ImageGalleryItem funcModal={this.isOpenModal} openModal={isModal} key={obj.id} webImg={obj.webformatURL} largeImg={obj.largeImageURL} />
                ))}
               
                    
                    { isModal && <Modal statusModal={this.CloseModal} largeImg={largeImg} />}
                </ul>
                {result.length > 0 && <Button Load={this.clickOnLoadMore} />}
                </>
        );
    }
}
