import React, {Component} from 'react'
import Logo from '../parts/logo.jsx'
import bgimg from '../img/background.svg'
export default class TeacherPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-0">
                    <a className="navbar-brand pl-5" href="#">Вітаємо Вас "ім'я"</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-60 order-3 dual-collapse2" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Предмет
                                </a>
                                <div className="dropdown-menu dropdown-menu-right text-right" aria-labelledby="navbarDropdown" style={{fontSize: '1em'}}>
                                    <a className="dropdown-item" href="#">Лінійна алгебра</a>
                                    <a className="dropdown-item" href="#">Диф.рівняння</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                
{/* 1-st menu */}

                <div className="row w-100 pl-5 mt-3" style={{height: '90%'}}>
                    <div className="col-10 col-lg-10 offset-1 offset-lg-0 my-auto">
                        <div className="row">

                            <div className="col-6 col-md-3 col-lg-2 btn-group mb-3">
                                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                    Рік
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <button className="dropdown-item" type="button">2017</button>
                                    <button className="dropdown-item" type="button">2018</button>
                                    <button className="dropdown-item" type="button">2019</button>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2 btn-group mb-3">
                                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                    Курс
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">1</button>
                                    <button className="dropdown-item" type="button">2</button>
                                    <button className="dropdown-item" type="button">3</button>
                                    <button className="dropdown-item" type="button">4</button>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2 btn-group mb-3">
                                <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                    Група
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                    <button className="dropdown-item" type="button">ІПЗ</button>
                                    <button className="dropdown-item" type="button">МІВТ-ЕТ</button>
                                    <button className="dropdown-item" type="button">ЕП</button>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2 btn-group mb-3">
                                <button className="btn btn-secondary btn-lg" type="button" id="dropdownMenu4" style={{backgroundColor:"#343a40",width: '100%'}}>
                                    Студенти
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-3 col-lg-2 mb-3"><input type="date" className="form-control" id="date"/></div>
                            <div className="col-6 col-md-3 col-lg-2 mb-3"><input type="number" className="form-control" id="minb" placeholder="Мін. бал"/></div>
                            <div className="col-6 col-md-3 col-lg-2 mb-3"><input type="number" className="form-control" id="maxb" placeholder="Макс. бал"/></div>
                            <div className="col-6 col-md-3 col-lg-2 mb-3"><button type="button" className="btn btn-danger btn-lg" style={tbtn}>Відправити</button></div>
                        </div>

{/* 2-nd menu */}

                        <div className="row mt-5">
                            <div className="col-12 col-md-6 mb-3"><input type="text" className="form-control" id="homework" placeholder="Домашнє завдання" style={{height: '200px'}}/></div>
                            <div className="col-12 col-md-4 col-lg-2 px-0">
                                <div className="col-6 col-md-12 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                        Курс
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">1</button>
                                        <button className="dropdown-item" type="button">2</button>
                                        <button className="dropdown-item" type="button">3</button>
                                        <button className="dropdown-item" type="button">4</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-12 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                        Група
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">ІПЗ</button>
                                        <button className="dropdown-item" type="button">МІВТ-ЕТ</button>
                                        <button className="dropdown-item" type="button">ЕП</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-12 mb-3" style={{float:'left'}}><input type="date" className="form-control" id="date2"/></div>
                                <div className="col-6 col-md-12 mb-3" style={{float:'left'}}><button type="button" className="btn btn-danger btn-lg" style={tbtn}>Відправити</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
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
    const tbtn = {
        float: 'left', 
        width: '100%', 
        paddingBottom: '2px', 
        paddingTop: '2px'
    }