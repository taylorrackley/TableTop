import React, { Component } from 'react';
import './checkDetails.css';

class CheckDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animateCheckDetailsView: 'view-swipe-down'
        }
    }

    componentDidMount() {
       setTimeout(() => {
           this.setState({animateCheckDetailsView: 'view-swipe-up'});
        }, 0)
    }

    closePinView = () => {
        this.setState({animateCheckDetailsView: 'view-swipe-down'});
        setTimeout(() => {
            this.props.hideCheckDetailsView();
        }, 300);
    }

    render() {
        return (
            <div id="check-details-view" className={this.state.animateCheckDetailsView}>
                <p id="display-restaurant-name" className="bold">[Restaurant]</p>
                <div id="details-container" className="clearfix">
                    <div id="meal-subtotal" className="clearfix">
                        <p className="details-left-side">Tab Total:</p>
                        <p className="details-right-side">${this.props.checkDetails.subtotal.toFixed(2)}</p>
                    </div>
                    <div id="meal-tip" className="clearfix">
                        <p className="details-left-side">Gratuity:</p>
                        <select id="selected-tip-percent" className="details-left-side">
                          <option value="0">0%</option>
                          <option value="5">5%</option>
                          <option value="10">10%</option>
                          <option value="15">15%</option>
                          <option value="20">20%</option>
                          <option value="25">25%</option>
                        </select>
                        <p className="details-right-side">${this.props.checkDetails.tip.toFixed(2)}</p>
                    </div>
                    <div id="meal-tax" className="clearfix">
                        <p className="details-left-side">Tax:</p>
                        <p className="details-right-side">${this.props.checkDetails.tax.toFixed(2)}</p>
                    </div>
                </div>
                <p id="meal-total-text">Your total is:</p>
                <p id="meal-total">${this.props.checkDetails.total.toFixed(2)}</p>
                <div id="pay-now-btn" className="btn">Pay Now</div>
            </div>
        );
    }
}

export default CheckDetails;
