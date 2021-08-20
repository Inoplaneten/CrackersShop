export const getFieldErrors = (field, value) => {
    let error;

    'validators' in field && field.validators.some(errorType => {
        if('getErrorMinLength' in errorType && !errorType.getErrorMinLength(value)) {
            return (error = true);
        }

        return (error = false);
    });

    return error;
};