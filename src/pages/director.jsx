import React, {Component} from 'react'
import bgimg from '../img/background.svg'
import TeacherHeader from '../parts/teacherHeader'
import Logo from '../parts/logo.jsx'
class DirectorPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <TeacherHeader />
                <Logo />
            </div>
        )
    }}
const bgimgStyle = {
    background: 'url('+ bgimg +') no-repeat right fixed',
    backgroundSize: 'auto 100%',
    width: '100%',
    height: '100%',
    padding: '0px',
    fontSize: '3em', 
}
    export default DirectorPage