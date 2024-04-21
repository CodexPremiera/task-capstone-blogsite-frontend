import React, {createContext, useContext, useEffect, useState} from "react";
import Loading from "../components/utils/Loading.jsx";


const AppContext = createContext(undefined);
export const useCurrentUser = () => useContext(AppContext);

const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      {isLoading ? <Loading /> : children}
    </AppContext.Provider>
  );
};
export default Context;
