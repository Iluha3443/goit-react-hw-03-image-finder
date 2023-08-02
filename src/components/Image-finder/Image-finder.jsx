import React from "react";
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from "../ImageGallery/ImageGallery";


class ImageFinder extends React.Component  {

    state = {
        searchName: '',
    };

    handleFormSubmit = searchName => {
        this.setState({ searchName })
    };
    
    render() {
        return (
            <>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageGallery setSearch={this.state.searchName} />
                </>
        )
    }

}

export default ImageFinder;