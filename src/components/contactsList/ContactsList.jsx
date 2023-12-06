import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, changeFilter, filterState, getFilteredData, children }) => {
  const filteredContacts = getFilteredData(contacts);

    return ( 
    <>
   {children}
   {
    filteredContacts.length === 0 
    ? (<p>No contacts match your search</p>)
    : ( <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>)
   }
    </>  
  );
};
