import React from 'react';
import { nanoid } from 'nanoid';

export class InputField extends React.Component {

state = {
    name: '',
    number: '',
}

handleValueChange = (field, event) => {
    this.setState({[field]: event.target.value});
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = { name, number, id: nanoid(5) };

    this.props.updateContactState(newContact);

    this.setState({ name: '', number: '' });
  };

    render() {
         return (
    <form onSubmit={this.createContact}>
        <label> Name
       <input name='name' value={this.state.name} type="text" onChange={(event) => this.handleValueChange('name', event)}/>     
        </label> 

        <label>Number
        <input name="number" value={this.state.number} type="tel" onChange={(event) => this.handleValueChange('number', event)}  required />
        </label>
        <button type='submit'>Add contact</button>
    </form>    
  )
    }
 
}