import React from 'react';
import PropTypes from 'prop-types';

const InputRange = props => {
    return (
        <div className='inputRangeBox d-flex j-content-between'>
            <input 
                type='range' 
                name={props.name} 
                min={props.min} 
                max={props.max} 
                value={props.value} 
                onChange={props.onChange} 
                className='inputRangeBox__slider'
            />
            <span className='inputRangeBox__result'>{props.value}%</span>
        </div>
    )
};

InputRange.propTypes = {
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string
};

export { InputRange };