import React from 'react';
import ReactDom from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = {1} subTitle ={123}/>
        {/* <CounterApp title = "CounterApp" value = {10} /> */}
    </React.StrictMode>
)