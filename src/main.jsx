import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import React from "react";
import {App} from "./app.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
