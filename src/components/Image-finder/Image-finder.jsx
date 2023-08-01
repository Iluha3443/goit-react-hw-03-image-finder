import React from "react";
import Searchbar from '../Searchbar/Searchbar'

class ImageFinder extends React.Component  {

    state = {
        searchName: '',
    };

    handleFormSubmit = searchName => {
         this.setState({searchName})
        
    }
    
    render() {
        return (
            <Searchbar onSubmit={this.handleFormSubmit} />
        )
    }

}

export default ImageFinder;