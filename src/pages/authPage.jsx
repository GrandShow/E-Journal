import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import bgimg from '../img/background.svg'
import Logo from '../parts/logo.jsx'
import Auth from '../parts/auth.jsx'
class AuthPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <Auth />
                <Logo />
            </div>
        )
    }}
const bgimgStyle = {
    background: 'url('+ bgimg +') no-repeat center top fixed',
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 50px #000',
    width: '100%',
    height: '100%'
}
    export default AuthPage