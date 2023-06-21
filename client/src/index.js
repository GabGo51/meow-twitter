import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './Components/GlobalStyles';
import App from './Components/App';
import { UserProvider } from './Components/UserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserProvider>
    <GlobalStyles/>
    <App />
  </UserProvider>
);
