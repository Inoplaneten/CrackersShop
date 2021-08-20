import { isMinLength, isErrorsForm } from '../../utils/validators';
import { getUpdatesInputRange } from '../../utils/getUpdatesInputRange';
import { setAddOrder, setGeneralOrdersInfo } from '../reducers/cartReducer';

const UPDATE_INPUT_RANGE_VALUE = '/cracker-store/formAddOrder/UPDATE_INPUT_RANGE_VALUE',
      UPDATE_SELECTED_OPTION_VALUE = '/cracker-store/formAddOrder/UPDATE_SELECTED_OPTION_VALUE',
      ERROR_FORM = '/cracker-store/formAddOrder/ERROR_FORM',
      GET_WAIT_FORM_ADD_ORDER = '/cracker-store/formAddOrder/GET_WAIT_FORM_ADD_ORDER',
      SUCCES_FORM_ADD_ORDER = '/cracker-store/formAddOrder/SUCCES_FORM_ADD_ORDER';

const initialState = {
    name: 'formAddOrder',
    fields: {
        soybean: {
            type: 'range',
            name: 'soybean',
            min: 0,
            max: 100,
            value: 0,
            maxValue: 100,
            validators: [
                {
                    getErrorMinLength: value => isMinLength(+value, 1),
                }
            ]
        },
        sesame: {
            type: 'range',
            name: 'sesame',
            min: 0,
            max: 100,
            value: 0,
            maxValue: 100,
            validators: [
                {
                    getErrorMinLength: value => isMinLength(+value, 1),
                }
            ]
        },
        wheat: {
            type: 'range',
            name: 'wheat',
            min: 0,
            max: 100,
            value: 0,
            maxValue: 100,
            validators: [
                {
                    getErrorMinLength: value => isMinLength(+value, 1),
                }
            ]
        },
        corn: {
            type: 'range',
            name: 'corn',
            min: 0,
            max: 100,
            value: 0
        }
    },
    select: {
        options: [
            {
                label: 'Small pack',
                value: 100,
            },
            {
                label: 'Medium pack',
                value: 150,
            },
            {
                label: 'Large pack',
                value: 200,
            },
        ],
        selectedOptions: null
    },
    validators: { getErrorsForm: form => isErrorsForm(form) },
    error: false,
    errorText: 'Select package and ingredients',
    succesForm: false,
    isLoading: false,
}

export const formAddOrder = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_RANGE_VALUE:         
            return {
                ...state,
                fields: getUpdatesInputRange(state, action.inputName, action.currentValue),
                error: false
            }
        case UPDATE_SELECTED_OPTION_VALUE:
            return {
                ...state,
                select: {
                    ...state.select,
                    selectedOptions: action.data
                },
                error: false
            }
        case ERROR_FORM: 
            return {
                ...state,
                error: true
            }
        case GET_WAIT_FORM_ADD_ORDER:
            return {
                ...state,
                fields: Object.values(state.fields).reduce((fields, field) => (
                    {
                        ...fields, 
                        [field.name]: {
                            ...state.fields[field.name],
                            maxValue: 100, 
                            value: 0
                        }
                    }), {...state.fields}
                ),
                select: {
                    ...state.select,
                    selectedOptions: null
                },
                succesForm: true,  
                isLoading: true
            }                   
        case SUCCES_FORM_ADD_ORDER:
            return {
                ...state,
                succesForm: false,  
                isLoading: false
            }    
        default: 
            return state;
    }
};

export const setFieldRangeUpdateForOrderAddForm = (currentValue, inputName) => ({
    type: UPDATE_INPUT_RANGE_VALUE,
    currentValue,
    inputName
});

export const setSelectedOptionsUpdateForOrderAddForm = data => ({
    type: UPDATE_SELECTED_OPTION_VALUE,
    data
});

export const setErrorFormAddOrder = () => ({
    type: ERROR_FORM
});

export const setGetWaitForOrderAddForm = () => ({ type: GET_WAIT_FORM_ADD_ORDER });

export const setSuccesForOrderAddForm = () => ({ type: SUCCES_FORM_ADD_ORDER });

export const handleSubmitForOrderAddForm = form => dispatch => {
    if(('validators' in form && 'getErrorsForm' in form.validators) && form.validators.getErrorsForm(form)) {
       dispatch(setErrorFormAddOrder());
    }else {
        
        let { soybean, sesame, wheat, corn } = form.fields;
        let { selectedOptions } = form.select;

        let newOrder = {
            id: Math.round(Math.random()*1000),
            package: selectedOptions.label,
            weight: selectedOptions.value,
            soybean: soybean.value, 
            sesame: sesame.value, 
            wheat: wheat.value,
            corn: corn.value
        };

        dispatch(setAddOrder(newOrder));
        dispatch(setGeneralOrdersInfo());
        dispatch(setGetWaitForOrderAddForm());
        dispatch(setSuccesForOrderAddForm());
    }
};