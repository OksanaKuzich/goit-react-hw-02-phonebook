import PropTypes from 'prop-types';

export const Filter = ({ valueFilter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={valueFilter} onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
