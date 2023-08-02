import { Dna } from 'react-loader-spinner';
import React from "react";
import PropTypes from 'prop-types';

const Loader = () => {
    return (
        <>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </>
    )
};

export default Loader;



