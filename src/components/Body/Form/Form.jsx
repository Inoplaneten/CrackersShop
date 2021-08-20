import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ name, onSubmit, className, error, errorText, children }) => (
    <>
        <form name={name} onSubmit={onSubmit} className={className}>
            {children}
        </form>
        {error && 
        <span className='errorForm'>
            {errorText}
        </span>}
    </>
    
);

Form.propTypes = {
    name: PropTypes.string,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    children: PropTypes.node
};

export { Form };