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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

