import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleInputNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  addTodo = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <>
        <h3>Phonebook</h3>
        <form onSubmit={this.addTodo}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Ivan"
              value={this.state.name}
              onChange={this.handleInputName}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="111-11-11"
              value={this.state.number}
              onChange={this.handleInputNumber}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h3>Contacts</h3>
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button type="button">Delete</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
