import React, {Component} from 'react'

export default class StudentToday extends Component {
    render() {
        return (
            <div className="container-fluid">
                    <div className="table-responsive pt-5">
                        <table className="table table-bordered table-hover" style={{width: '700px', fontSize: '20pt', backgroundColor: 'white', borderRadius: '10px'}}>
                            <thead>
                                <tr className="thead-dark">
                                    <th scope="col">Предмет</th>
                                    <th scope="col">Отриманий бал</th>
                                    <th scope="col">Максимальний бал</th>
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

                    {/*schedule*/}

                    <div className="mt-5 py-2">
                        <div style={tomorrowstyle}>На завтра</div>
                        <input type="date" style={dateinput}></input>
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
        )
    }
}
const tomorrowstyle = {
    float: 'left', 
    backgroundColor: '#343a40',
    fontSize: '0.81em', 
    color: 'white', 
    paddingBottom: '3px',
    paddingTop: '2px', 
    paddingLeft: '10px', 
    paddingRight: '10px', 
    borderRadius: '10px',
}
const dateinput = {
    float: 'left',
    fontSize: '0.8em', 
    marginLeft: '10px', 
    marginBottom: '4px',
    borderRadius: '10px', 
    border: '2px solid #343a40',
}