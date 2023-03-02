import { Component } from 'react';
import './emploees-list-item.css';

class EmploeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            promotion: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    forPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, promotion} = this.state;

        return (
            <li className={"list-group-item d-flex justify-content-between" + (increase ? " increase" : "") + (promotion ? " like" : "")}>
                <span 
                    onClick={this.forPromotion} 
                    className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie-bite"></i>
                    </button>
    
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmploeesListItem;