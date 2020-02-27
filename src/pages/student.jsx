import React, {Component} from 'react'
import Logo from '../parts/logo.jsx'
import StudentHeader from '../parts/studentHeader'
import bgimg from '../img/background.svg'
import StudentToday from '../parts/student1'
class StudentPage extends Component {
    render() {
        return (
            <div style={bgimgStyle}>
                <StudentHeader />
                <StudentToday />
                <Logo />
            </div>
        )
    }}
    const bgimgStyle = {
        background: 'url('+ bgimg +') no-repeat right fixed',
        backgroundSize: 'auto 100%',
        width: '100%',
        height: '100%',
        fontSize: '3em', 
        height: '100%',
    }

export default StudentPage