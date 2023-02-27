import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return <FilterField>Find comtact by Name
        <input type="text" value={value} onChange={onChange}></input></FilterField>
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}