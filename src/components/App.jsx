import React from 'react';
import { InputField } from './InputField/InputField';

export class App extends React.Component {

  state = {
    contacts: [],
    name: ''
  }
  

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  render () {
    console.log(this.state)
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <InputField nameState={this.state.name} handleNameChange={this.handleNameChange}/>
    </div>
  );
  }
};
