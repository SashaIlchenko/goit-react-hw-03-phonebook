import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
    return < ul >
        {contacts.map(contact => (<li key={contact.id}>{contact.name}: {contact.number}<DeleteBtn type='button' onClick={() => onDelete(contact.id)}>Delate</DeleteBtn ></li>))}
    </ul >
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    onDelete: PropTypes.func,
}