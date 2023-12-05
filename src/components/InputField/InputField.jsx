import React from 'react';

export const InputField = ({nameState, handleNameChange, formSubmit, createContact}) => {
  return (
    <form onSubmit={formSubmit}>
        <label> Name
       <input name='name' value={nameState} type="text" onChange={handleNameChange}/>     
        </label> 
        <button type='submit' onClick={createContact}>Add contact</button>
    </form>    
  )
}
