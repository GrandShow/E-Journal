import React, {Component} from 'react'
import bgimg from '../img/OMK.svg'
import Logo from '../parts/logo.jsx'
class TeacherPage extends Component {

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
    export default TeacherPage