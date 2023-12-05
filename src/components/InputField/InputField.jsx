import React from 'react';
import { nanoid } from 'nanoid';

export const InputField = ({nameState, handleNameChange}) => {
  return (
    <input name='contactName' value={nameState} type="text" onChange={handleNameChange}/>
  )
}
