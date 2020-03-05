import React, {Component} from 'react'
import bgimg from '../img/background.svg'
import Logo from '../parts/logo.jsx'
export default class DirectorPage extends Component {
    render() {
        return (
            <div style={bgimgStyle} className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Вітаємо Вас "ім'я"</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-60 order-3 dual-collapse2" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button class="btn btn btn-outline-danger my-2 ml-2" type="button">Додати учня</button>
                            </li>
                            <li className="nav-item">
                                <button class="btn btn btn-outline-danger my-2 ml-2" type="button">Додати вчителя</button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Предмет
                                </a>
                                <div className="dropdown-menu dropdown-menu-right text-right" aria-labelledby="navbarDropdown" style={{fontSize: '1em'}}>
                                    <a className="dropdown-item" href="#">Всі</a>
                                    <a className="dropdown-item" href="#">які</a>
                                    <a className="dropdown-item" href="#">тікі</a>
                                    <a className="dropdown-item" href="#">є</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

{/* 1-st menu */}

                <div className="row w-100 pl-5 mt-3" style={{height: '90%'}}>
                    <div className="my-auto">
                        <div className="col-10 col-lg-7 offset-1 offset-lg-0 my-auto">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Редагувати оцінки:</h1>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
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

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                        Група
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <button className="dropdown-item" type="button">ІПЗ</button>
                                        <button className="dropdown-item" type="button">МІВТ-ЕТ</button>
                                        <button className="dropdown-item" type="button">ЕП</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 mb-3"><button type="button" className="btn btn-danger btn-lg">Редагувати</button></div>
                            </div>

{/* 2-nd menu */}

                            <div className="row mt-5">
                                <div className="col-12">
                                    <h1>Заміни:</h1>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
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

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%'}}>
                                        Група
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <button className="dropdown-item" type="button">ІПЗ</button>
                                        <button className="dropdown-item" type="button">МІВТ-ЕТ</button>
                                        <button className="dropdown-item" type="button">ЕП</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-lg-4 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%', overflow: 'hidden'}}>
                                        Пара яку заміняють
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">Вступ до ООП</button>
                                        <button className="dropdown-item" type="button">Бази даних</button>
                                        <button className="dropdown-item" type="button">Фіз. вихов.</button>
                                        <button className="dropdown-item" type="button">Диф. рівняння</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%', overflow: 'hidden'}}>
                                        Пара яка буде
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <button className="dropdown-item" type="button">Всі</button>
                                        <button className="dropdown-item" type="button">пари</button>
                                        <button className="dropdown-item" type="button">які</button>
                                        <button className="dropdown-item" type="button">тільки</button>
                                        <button className="dropdown-item" type="button">є в групи</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
                                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#343a40",width: '100%', overflow: 'hidden'}}>
                                        Аудиторія
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button">всі</button>
                                        <button className="dropdown-item" type="button">ауд</button>
                                        <button className="dropdown-item" type="button">що</button>
                                        <button className="dropdown-item" type="button">є</button>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 btn-group mb-3">
                                    <input type="date" className="form-control" style={{widtn: '100%',height: '100%', overflow: 'hidden'}}/>
                                </div>

                                <div className="col-6 col-md-3 col-lg-3 mb-3"><button type="button" className="btn btn-danger btn-lg">Додати</button></div>

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