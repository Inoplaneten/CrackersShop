export const getUpdatesInputRange = (state, currentName, currentValue) => {
    let totalValue = Object.values(state.fields).reduce((sum, item) => {
        if(item.name !== 'corn' &&  item.name !== currentName) {
            return sum += +item.value;
        }

        if(item.name === currentName) {
            sum += +currentValue;
        }

        if(sum >= 100) {
            return sum = 100;
        }

        if(sum <= 0) {
            sum = 0;
        }

        return sum += 0;
    }, 0);

    return Object.values(state.fields).reduce((fields, field) => {
        if(field.name !== 'corn' && field.name !== currentName) {
            let maxValue = 100 - totalValue + +field.value;

            return {
                ...fields,
                [field.name]: {
                    ...state.fields[field.name],
                    maxValue
                }
            }
        }

        if(field.name === 'corn') {
            let value = state.fields.corn.max - totalValue;

            return {
                ...fields,
                [field.name]: {
                    ...state.fields[field.name],
                    value: value !== 100 ? value : 0
                }
            }
        }

        return {
            ...fields, 
            [currentName]: {
                ...state.fields[currentName], 
                value: +currentValue >= state.fields[currentName].maxValue ? state.fields[currentName].maxValue : +currentValue,
            }
        }
    }, {...state.fields})
};