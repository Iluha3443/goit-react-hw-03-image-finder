import React from "react";
import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

const Button = ({Load}) => {

    return (
        <button onClick={() => Load()} className={css.Button}>Load more</button>
    )
}

export default Button;

Button.propTypes = {
Load: PropTypes.func    
}