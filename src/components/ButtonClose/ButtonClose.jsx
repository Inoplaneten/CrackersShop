import React from 'react';
import PropTypes from 'prop-types';

const ButtonClose = ({ onClick }) => {
    return (
        <button 
            type='button' 
            onClick={onClick}
            className='btnClose'
        >
        </button>
    )
};

ButtonClose.propTypes = {
    onClick: PropTypes.func,
};

export { ButtonClose };