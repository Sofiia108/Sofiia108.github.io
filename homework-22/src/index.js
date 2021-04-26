import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let baseName = "";
baseName = "/homework-22/build";

ReactDOM.render(
    <React.StrictMode>
        <App baseName={baseName}/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();