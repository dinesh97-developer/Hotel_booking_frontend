

import React from 'react';
//import ReactDOM from "react-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals.js';
import { RoomProvider } from "./Context/Context.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>

)


reportWebVitals();
