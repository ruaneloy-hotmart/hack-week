import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@hotmart-org-ca/cosmos-web/dist/web-components/cosmos-web/cosmos-web.css';
import '@hotmart-org-ca/cosmos-tokens/dist/hotmart-product/base/css/_variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
