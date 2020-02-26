import React, {Component} from 'react'
import bgimg from '../img/background.svg'
import personsImg from '../img/persons.svg'
import Logo from '../parts/logo.jsx'
class AuthPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <div className="row justify-content-center">
                <div className="col-xl-4 col-md-8 col-sm-12 col-12" style={authStyle}>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="h1" style={{textAlign: 'center', color: 'white'}}>Вхід в систему</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-11" style={{backgroundColor:'rgba(175, 24, 46, 0.9)', padding: '20px', borderRadius:'10px',
    border: '1px solid #000',}}>
                            <div className="row justify-content-around">
                                <div className="col-4">
                                    <img src={personsImg} alt="Вчитель" style={imgCenter}/>
                                    <h5 style={{textAlign: 'center'}} id="members">Вчитель</h5>
                                </div>
                                <div className="col-4">
                                    <img src={personsImg} alt="Директор" style={imgCenter}/>
                                    <h5 style={{textAlign: 'center'}} id="members">Директор</h5>
                                </div>
                                <div className="col-4" >
                                    <img src={personsImg} alt="Учень" style={imgCenter}/>
                                    <h5 style={{textAlign: 'center'}} id="members">Учень</h5>
                                </div>
                            </div>
                            <form>
                            <div className="row justify-content-center">
                                <div className="col-11 col-sm-8">
                                    <input style={inpStyle} type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="col-11 col-sm-8">
                                    <input style={inpStyle} type="password" class="form-control" placeholder="Password" />
                                    <div className="row" style={{marginTop: '10px'}}>
                                        <div className="col-6"></div> 
                                        <div className="col-6"><button type="submit" style={btnStyle} className="btn btn-danger" title="Submit">Увійти</button></div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
const authStyle = {
    backgroundColor: 'rgba(51, 51, 51, 0.7)',
    border: '1px solid #000',
    position: 'fixed',
    top: '50%',
    transform: 'translate(0, -50%)',
    paddingTop: '15px',
    paddingBottom: '30px',
    borderRadius: '10px',
}
const imgCenter = {
    width: '50%',
    display: 'block', 
    marginLeft: 'auto', 
    marginRight: 'auto',
}
const inpStyle = {
    width:'100%', 
    textAlign:'center',
    marginTop: '10px',
}
const btnStyle = {
    width: '100%',
    color: 'white',
    textDecoration: 'underline',
}
    export default AuthPage