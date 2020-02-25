import React from 'react'
import ReactDOM from 'react-dom'
import ErrorPage from './pages/errorPage.jsx'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
    <Router>
        <ErrorPage />
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
