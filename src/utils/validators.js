import { getFieldErrors } from './getFieldErrors';

export const isMinLength = (value, min) => value < min && value < min;

export const isErrorsForm = form =>  {
    let errorsForm;

    Object.values(form.fields).every(field => {
        let error = getFieldErrors(field, field.value);

        if(error) {
            return(errorsForm = false);
        }

        return(errorsForm = true);
    });

    if(form.select.selectedOptions === null) {
        errorsForm = true;
    }

    return errorsForm;
};