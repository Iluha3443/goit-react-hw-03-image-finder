import React from "react";
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends React.Component {
    state = {
        searchName: '',
    };

    handleNameChange = event => {
        const value = event.target.value;
        this.setState({ searchName: value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchName.trim() === '') {
            return
        }
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: '' });
    };

    render() {
        return (
       
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit}  className={css.form}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
      
        )
   }
   
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};