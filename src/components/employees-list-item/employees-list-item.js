import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: 0
        }
    }

    onUpdateSalary = (e) => {
        const salaryChange = e.target.value.slice(0, -1);
        this.setState({salary: salaryChange});
        this.props.onUpdateSalary(this.props.name, salaryChange);
    }

    render () {
        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props;

        return (
            <li className={"list-group-item d-flex justify-content-between" + (increase ? " increase" : "") + (rise ? " like" : "")}>
                <span 
                    onClick={onToggleProp}
                    data-toggle="rise"
                    className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange={this.onUpdateSalary}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                            className="btn-cookie btn-sm"
                            onClick={onToggleProp}
                            data-toggle="increase">
                        <i className="fas fa-cookie-bite"></i>
                    </button>
    
                    <button type="button" 
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployeesListItem;