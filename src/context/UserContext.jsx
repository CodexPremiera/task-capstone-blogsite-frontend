import React, { createContext, useContext } from 'react';


const UserContext = createContext(undefined);

export const useCurrentUser = () => useContext(UserContext);

export const UserProvider = ({ currentUser, children }) => (
  <UserContext.Provider value={currentUser}>
    {children}
  </UserContext.Provider>
);
