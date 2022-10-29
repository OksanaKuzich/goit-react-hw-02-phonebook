import PropTypes from 'prop-types';

export const ContactList = ({ visible }) => {
  return (
    <ul>
      {visible.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  visible: PropTypes.array.isRequired,
};
