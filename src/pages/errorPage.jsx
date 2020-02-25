import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import bgimg from '../img/error/gargantuabg.svg'
import deadman from '../img/error/deadman.svg'
import junk from '../img/error/junk.svg'
import junks from '../img/error/junks2.svg'
import Logo from '../parts/logo.jsx'
class ErrorPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-7 position-absolute fixed-bottom" style={message}>
                        <img src={junks} alt="junks" id="parts" style={imgStyle} />
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 position-absolute fixed-bottom" style={message}>
                        <img src={deadman} alt="man" id="parts" style={imgStyle}/>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 position-absolute fixed-bottom" style={message}>
                        <img src={junk} alt="junk" id="parts" style={imgStyle}/>
                    </div>
                    <div className="col-10 col-sm-8 col-md-6 col-xl-6 offset-1 fixed-top" style={message}>
                        <div className="row"> <h3>Вітаємо, ви дійшли до кінця Інтернету</h3></div>
                        <div className="row"> <h6>Пройшовши довгий шлях в пошуках вашого запиту ви нічого не знайшли. Радимо вам повернутися на <span style={{cursor:"pointer",textDecoration:"underline"}}>початок</span> ваших пригод.</h6></div>
                    </div>
                </div>
                <Logo />
            </div>
        )
    }}
const bgimgStyle = {
    background: 'url('+ bgimg + ') no-repeat center top fixed',
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 50px #000',
    width: '100%',
    height: '100%'
}
const message = {
    color: 'white',
    paddingTop: '50px',
}
const imgStyle = {
    width: '100%',
    padding: '10px',

}
    export default ErrorPage