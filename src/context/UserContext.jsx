import React, { createContext, useContext } from 'react';


const UserContext = createContext(undefined);

export const useCurrentUser = () => useContext(UserContext);

export const UserProvider = ({ currentUser, setCurrentUser, loading, setLoading, children }) => (
  <UserContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading }}>
    {children}
  </UserContext.Provider>
);

