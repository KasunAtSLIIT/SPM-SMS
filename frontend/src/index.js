import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SupervisorApp from "./app_view/supervisor_view";



ReactDOM.render(<SupervisorApp/>, document.getElementById('root'));

registerServiceWorker();
