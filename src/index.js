import React from 'react'
import ReactDOM from 'react-dom'
import ErrorPage from './pages/errorPage'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
    <Router>
        <ErrorPage />
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
