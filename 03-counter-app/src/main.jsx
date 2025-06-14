import React from 'react';
import ReactDom from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = "Hola Soy Goku" subTitle ={123}/>
    </React.StrictMode>
)