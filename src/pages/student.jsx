import React, {Component} from 'react'
import bgimg from '../img/OMK.svg'
import Logo from '../parts/logo.jsx'
class StudentPage extends Component {
    render() {
        return (
            <div style={{fontSize: '3em', height: '100%'}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Вітаємо Вас "ім'я"1234567</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse w-60 order-3 dual-collapse2" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Успішність за сьогодні </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">За весь час</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Увага</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            <div style={bgimgStyle} className="container-fluid">
                <div className="table-responsive mt-5 pt-5">
                    <table className="table table-bordered table-hover" style={{width: '700px', fontSize: '20pt', backgroundColor: 'white', borderRadius: '10px'}}>
                        <thead>
                            <tr className="thead-dark">
                                <th scope="col">Предмет</th>
                                <th scope="col">Максимальний бал</th>
                                <th scope="col">Мінімальний бал</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Математика</th>                
                                <td>10</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">Укр. мова</th>                 
                                <td>8</td> 
                                <td>10</td>
                            </tr>
                            <tr>
                                <th scope="row">Лін. алг. та аналіт. геом.</th>
                                <td>15</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <th scope="row">Фізкультура</th>               
                                <td>10</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-5 py-2">
                    <div style={{float: 'left', backgroundColor: '#343a40',fontSize: '0.8em', color: 'white', paddingBottom: '3px',paddingTop: '2px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '10px'}}>На завтра</div>
                    <input type="date" style={{float: 'left',fontSize: '0.8em', marginLeft: '10px', borderRadius: '10px', border: '2px solid #343a40'}}></input>
                </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover" style={{width: '1000px', fontSize: '20pt', backgroundColor: 'white', borderRadius: '10px'}}>
                            <thead>
                                <tr className="thead-dark">
                                    <th scope="col">Програмування</th>
                                    <th scope="col">Дизайн</th>
                                    <th scope="col">ООП</th>
                                    <th scope="col">Диф. рівняння</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ауд.38</td>                
                                    <td>ауд.10</td>
                                    <td>ауд.21</td>
                                    <td>ауд.40</td>
                                </tr>
                                <tr>
                                    <td>Домашка вивчити кучу всього просто кучу кучу кучу</td>               
                                    <td>Домашка2 вивчити кучу всього просто кучу кучу кучу</td> 
                                    <td>Домашка3 вивчити кучу всього просто кучу кучу кучу</td>
                                    <td>Домашка4 вивчити кучу всього просто кучу кучу кучу</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
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

export default StudentPage