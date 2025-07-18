import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from "./App"
import Main from './Main';
import './style.css';


const root=createRoot(document.getElementById("root"))
root.render(
  <>
 
  <App />
   <Main />

  </>
  
)