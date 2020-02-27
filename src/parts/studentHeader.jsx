import React, {Component} from 'react'
export default class StudentHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Вітаємо Вас "ім'я"</a>
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
            </div>
        )
    }}