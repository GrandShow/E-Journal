import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import bgimg from '../img/OMK.svg'
import Logo from '../parts/logo.jsx'
class DirectorPage extends Component {

    constructor(props) {
        super(props)
        this.state = { screenWidth: window.screen.availWidth + 'px'}
      }

    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <Logo />
            </div>
        )
    }}
const bgimgStyle = {
    background: 'url('+ bgimg +') no-repeat right fixed',
    backgroundSize: 'auto 95%',
    width: '100%',
    height: '100%',
}
    export default DirectorPage