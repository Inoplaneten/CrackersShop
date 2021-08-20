import Select, { components } from 'react-select';
import PropTypes from 'prop-types';

const { Option } = components;

const CustomSelectOption = props => (
    <Option {...props}>
        {props.data.label}
        <span className="input-select__value">({props.data.value}kg)</span>
    </Option>
);

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        border: '1px solid #ff4200',
        borderRadius: '50px',
        padding: 20,
        boxShadow: 'none',
        color: '#ff4200',
        borderColor: state.isFocused && state.isSelected ? 'transparent' : 'transparent',
        fontFamily: 'Fredoka One, sans-serif',
        fontWeight: 400,
        fontSize: 24,
        textTransform: 'uppercase',
        cursor: 'pointer'
    }),

    container: (provided, state) => ({
        ...provided,
        marginTop: 10,
        maxWidth: 400,
        width: '100%',
        flexShrink: 0,
    }),

    placeholder: (provided, state) => ({
        ...provided,
        fontFamily: 'Fredoka One, sans-serif',
        fontWeight: 400,
        fontSize: 24,
        textTransform: 'uppercase',
        color: '#ff4200'
    }),

    indicatorSeparator: () => ({
    }),

    menu: (provided, state) => ({
        ...provided,
        marginTop: 11,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #ff4200',
        borderRadius: 30
    }),

    menuList: (provided, state) => ({
        ...provided,
        borderRadius: 30,
        fontFamily: 'Avenir, sans-serif',
        fontSize: 24,
        fontWeight: 900,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#ff4200',
    }),

    option: (provided, { isSelected  }) => ({
          ...provided,
          backgroundColor: isSelected ? '#ff4200' : 'transparent',
          color: isSelected ? '#fff' : '#ff4200',
          paddingBottom: 18,
          borderBottom: '2px solid #f99a78',
    }),

    singleValue: (provided, state) => ({
        ...provided,
        fontFamily: 'Fredoka One, sans-serif',
        fontSize: 24,
        fontWeight: 400,
        textTransform: 'uppercase',
        color: '#ff4200'
    }),
    
    valueContainer: (provided, state) => ({
        ...provided,
        fontFamily: 'Fredoka One, sans-serif',
        fontWeight: 400,
        fontSize: 24,
        justifyContent: 'center'
    }),
};

const CustomSelect = props => (
    <Select
        options={props.options}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        components={{Option: CustomSelectOption }}
        styles={customStyles}
    />
);

CustomSelect.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    components: PropTypes.object,
    styles: PropTypes.object
};

export { CustomSelect };