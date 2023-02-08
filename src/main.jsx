import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="myappmusic.eu.auth0.com"
      clientId="GbQfnhSMyXjHv4AgJCWnw5LVqLFboafl"
      redirectUri={window.location.origin + "/homepage"}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)