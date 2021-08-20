import React from 'react';
import PropTypes from 'prop-types';

const ButtonDelete = ({ onClick }) => {
    return (
        <button 
            type='button' 
            onClick={onClick}
            className='btnDelete'
        >
        </button>
    )
};

ButtonDelete.propTypes = {
    onClick: PropTypes.func,
};

export { ButtonDelete };