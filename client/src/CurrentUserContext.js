import React from 'react';

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState('loading');
  
  React.useEffect(() => {
    fetch('http://localhost:31415/api/me/profile')
    .then(response => response.json())
    .then(data => {
        setCurrentUser(data);
        setStatus('idle');
    })
    .catch(err => console.log('this is your error', err))
  }, [])
  console.log(currentUser, status);
  return (
    <CurrentUserContext.Provider value={{ currentUser, status}}>
      {children}
    </CurrentUserContext.Provider>
);
};