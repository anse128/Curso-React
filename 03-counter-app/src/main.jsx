import React from 'react';
import ReactDom from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';


HelloWorldApp


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
    </React.StrictMode>
)