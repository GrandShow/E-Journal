import React, {Component} from 'react'
import logoimg from '../img/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

class Logo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-2 col-md-3 col-sm-4 col-6" id="bigLogo" style={logoStyle}>
                    <a href="#" title='Visit Creator`s site'><img src={logoimg} style={logoImgStyle} alt='Visit Creator`s site' /></a>
                </div>
            </div>
        )
    }
}
const logoStyle = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    paddingTop: '3px',
    margin: '10px',
}
const logoImgStyle = {
    width: '100%'
}
export default Logo