import React, { Component } from 'react';
import './alert.css';

class Alert extends Component {

    render() {
        return (
            <div id="alertContainer">
                <p id="thanks-for-using-tabletop" className="bold">Thanks for using<br/>TableTop</p>
                <p id="alertText">Enter the four digit pin on your receipt</p>
                <div id="view-total-btn" onClick={this.goToCheckDetails} className={"btn " + ''}>View Total</div>
            </div>
        );
    }
}

export default Alert;
