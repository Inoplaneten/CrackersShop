  
import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { InputRange } from '../InputRange/InputRange';
import {  CustomSelect } from '../CustomSelect/CustomSelect';
import { setFieldRangeUpdateForOrderAddForm, setSelectedOptionsUpdateForOrderAddForm, handleSubmitForOrderAddForm } from '../../../redux/reducers/formAddOrderReducer';
import { 
    getNameOrderAdditionForm, 
    getFieldsOrderAdditionForm, 
    getSelectOrderAdditionForm, 
    getErrorOrderAdditionForm,
    getErrorTextOrderAdditionForm,
    getValidatorsOrderAdditionForm
} from '../../../redux/selectors/formAddOrderSelector';
import PropTypes from 'prop-types';

const FormAddProductContainer = ({ formAddProduct, setFieldRangeUpdateForOrderAddForm, setSelectedOptionsUpdateForOrderAddForm, handleSubmitForOrderAddForm }) => {
    return (
        <Form   
            name={formAddProduct.name}
            onSubmit ={e => { e.preventDefault(); handleSubmitForOrderAddForm(formAddProduct); }}
            className={formAddProduct.name}
            error={formAddProduct.error}
            errorText={formAddProduct.errorText}
        >
            {
                Object.values(formAddProduct.fields).map((field, index) => {
                    return (
                        field.name === 'corn' ? 
                        <InputRange 
                            key={index}
                            name={field.name}
                            min={field.min}
                            max={field.max}
                            value={field.value}
                            onChange={e => e.preventDefault()}
                        />:
                        <InputRange 
                            key={index}
                            name={field.name}
                            min={field.min}
                            max={field.max}
                            value={field.value}
                            onChange={e => setFieldRangeUpdateForOrderAddForm(e.target.value, e.target.name)}
                        />
                    )
                })
            }
            <div className='selectBox d-flex j-content-between align-items-start'>
                <CustomSelect
                    options={formAddProduct.select.options}
                    placeholder='Choose your pack'
                    value={formAddProduct.select.selectedOptions}
                    onChange={setSelectedOptionsUpdateForOrderAddForm}
                />
                <button className='btnSubmitOrder btn btn-large'>
                    Add to Cart
                </button>
            </div>
        </Form>
    )
};

const mapStateToProps = state => ({
    formAddProduct: {
        name: getNameOrderAdditionForm(state),
        fields: getFieldsOrderAdditionForm(state),
        select: getSelectOrderAdditionForm(state),
        validators: getValidatorsOrderAdditionForm(state),
        error: getErrorOrderAdditionForm(state),
        errorText: getErrorTextOrderAdditionForm(state)
    }
});
  
const mapDispatchToProps = {
    setFieldRangeUpdateForOrderAddForm,
    setSelectedOptionsUpdateForOrderAddForm,
    handleSubmitForOrderAddForm
};

FormAddProductContainer.propTypes = {
    formAddProduct: PropTypes.object,
    setFieldRangeUpdateForOrderAddForm: PropTypes.func,
    setSelectedOptionsUpdateForOrderAddForm: PropTypes.func,
    handleSubmitForOrderAddForm: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddProductContainer);