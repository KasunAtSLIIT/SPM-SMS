import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Supervisor_App from "./app_view/supervisor_view";
import Login from './views/login';
import Company_App from './app_view/company_view';


ReactDOM.render(<Supervisor_App/>, document.getElementById('root'));

registerServiceWorker();
