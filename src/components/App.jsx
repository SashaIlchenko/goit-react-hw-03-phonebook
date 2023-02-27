import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  onAddContact = newContact => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`)
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }
  onDeleteContact = (contactId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
  }
  onFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (<Container ><h1>Phonebook</h1>
      <ContactForm onSubmit={this.onAddContact} />
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.onFilter} />
      <ContactList contacts={visibleContacts} onDelete={this.onDeleteContact} />
    </Container >
    )
  }
}
