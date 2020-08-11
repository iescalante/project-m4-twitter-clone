import React from 'react';

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children, handle }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [viewPage, setViewPage] = React.useState('me');
  const [status, setStatus] = React.useState('loading');

  
    React.useEffect(() => {
      if ( viewPage === 'me') {
      fetch('/api/me/profile')
      .then(response => response.json())
      .then(data => {
          setCurrentUser(data);
          setStatus('idle');
          setViewPage('me');
      })
      .catch(err => console.log('this is your error', err))
    } else {
      fetch(`/api/${handle}/profile`)
      .then(response => response.json())
      .then(data => {
          setCurrentUser(data);
          setStatus('idle');
          setViewPage(handle);
      })
      .catch(err => console.log('this is your error', err))
      }
    }, [])
    
    console.log(currentUser, status, viewPage);
    return (
      <CurrentUserContext.Provider value={{ currentUser, status, viewPage}}>
        {children}
      </CurrentUserContext.Provider>
    );
  
};