import React, {Component} from 'react'
export default class TeacherHeader extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }}