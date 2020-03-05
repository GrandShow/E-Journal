import React from 'react'
import ReactDOM from 'react-dom'
import DirectorPage from './pages/director'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
    <Router>
        <DirectorPage />
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
