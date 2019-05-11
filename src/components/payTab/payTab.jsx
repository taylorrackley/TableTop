import React, { Component } from 'react';
import './payTab.css';
import closeIcon from '../../img/close_icon.png';

class PayTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePinContainer: 'view-invisable',
            animatePinView: 'pin-swipe-down'
        }
    }

    componentDidMount(){
       setTimeout(() => {
           this.setState({animatePinContainer: 'view-visible-blurry'})
           this.setState({animatePinView: 'pin-swipe-up'})
        }, 0)
    }

    closePinView = () => {
        this.setState({animatePinContainer: 'view-invisable'});
        this.setState({animatePinView: 'pin-swipe-down'});
        setTimeout(() => {
            this.props.hidePinView();
        }, 300);
    }

    render() {
        return (
            <div id="paytab-container" className={this.state.animatePinContainer}>
                <div id="pin-container" className={this.state.animatePinView}>
                    <img id="close-pin-view" src={closeIcon} onClick={this.closePinView} alt="Close Pin View" />
                    <p id="thanks-for-using-tabletop" className="bold">Thanks for using<br/>TableTop</p>
                    <p id="enter-pin-txt">Enter the four digit pin on your receipt</p>
                    <input id="pin-input" type="text" pattern="/^-?\d+\.?\d*$/" placeholder="0000" maxLength="4" />
                    <div id="pay-now-btn" className="btn">Pay Now</div>
                </div>
            </div>
        );
    }
}

export default PayTab;
