import PropTypes from 'prop-types';
import {
  ListContacts,
  ButtonDelete,
  ListContactsItem,
} from './ContactList.styled';

export const ContactList = ({ visible, onDeleteContact }) => {
  return (
    <ListContacts>
      {visible.map(({ id, name, number }) => {
        return (
          <ListContactsItem key={id}>
            {name}: {number}
            <ButtonDelete
              type="button"
              onClick={() => onDeleteContact(id)}
              dataid={id}
            >
              Delete
            </ButtonDelete>
          </ListContactsItem>
        );
      })}
    </ListContacts>
  );
};

ContactList.propTypes = {
  visible: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
