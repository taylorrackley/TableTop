import React, { Component } from 'react';
import './payTabBtn.css';
import { Link } from 'react-router-dom';

class PayTabBtn extends Component {

    render() {
        return (
            <div id="payTabBtnContainer" className="gradientDark">
                <Link to="/tab/pay"><div id="payTabBtn">Pay Now</div></Link>
            </div>
        );
    }
}

export default PayTabBtn;
