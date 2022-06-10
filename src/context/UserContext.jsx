import React, { createContext, useContext, useState } from 'react';

const userContext = createContext();

export const useUser = () => useContext(userContext);

// This component is gonna handle everythign that relates to the user data.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function UserProvider(props) {
  const { children } = props;

  const [user, setUser] = useState();

  const signIn = (userData) => {
    setUser(userData);
  };

  const signOut = () => {
    setUser(undefined);
  };
  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
