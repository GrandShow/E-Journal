import React, {Component} from 'react'
import {Fade, Zoom} from 'react-reveal'
import 'bootstrap/dist/css/bootstrap.min.css'
import bgimg from '../img/error/gargantuabg.svg'
import deadman from '../img/error/deadman.svg'
import junk from '../img/error/junk.svg'
import junks from '../img/error/junks2.svg'
import Logo from '../parts/logo.jsx'
class ErrorPage extends Component {
    render() {
        return (
            <Zoom>
                <div style={bgimgStyle}>
                    <div style={message}>
                            <div>
                                <h2>Вітаємо, ви дійшли до кінця Інтернету</h2>
                                <h4>Пройшовши довгий шлях в пошуках вашого запиту ви нічого не знайшли. Радимо вам повернутися на 
                                    <span style={{cursor:"pointer",textDecoration:"underline"}}>початок</span> 
                                ваших пригод.
                                </h4>
                            </div>
                    </div>
                    <Fade right cascade>
                        <div>
                            <img class="errImg" src={junks} alt="junks" id="parts" style={imgStyle} />
                            <img class="errImg" src={deadman} alt="man" id="parts" style={imgStyle}/>
                            <img class="errImg" src={junk} alt="junk" id="parts" style={imgStyle}/>
                        </div>
                    </Fade>

                    <Logo />
                </div>
            </Zoom>
        )
    }}
const bgimgStyle = {
    background: 'url('+ bgimg + ') no-repeat center top fixed',
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 50px #000',
    width: '100%',
    height: '100%',
}
const message = {
    color: 'white',
    margin: '50px',
    position: 'absolute',
}
const imgStyle = {
    width: '60%',
    marginTop: '50px',
    position: 'absolute',
}
    export default ErrorPage