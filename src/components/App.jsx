import React from 'react';
import { InputField } from './InputField/InputField';
import { ContactsList } from './contactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: ''
  }
  

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  formSubmit = (event) => {
    event.preventDefault()
  }

  createContact = () => {

  }

  render () {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <InputField nameState={this.state.name} handleNameChange={this.handleNameChange} formSubmit={this.formSubmit} createContact={this.createContact}/>
      <ContactsList contacts={this.state.contacts}/>
    </div>
  );
  }
};
