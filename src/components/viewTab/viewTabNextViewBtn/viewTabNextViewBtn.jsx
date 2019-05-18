import React, { Component } from 'react';
import './viewTabNextViewBtn.css';

class ViewTabNextViewBtn extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     animatePayTabNextView: 'view-swipe-down',
        // }
    }

    // componentDidMount(){
    //    setTimeout(() => {
    //        this.setState({animatePayTabNextView: 'view-swipe-up'})
    //    }, 0);
    // }
    //
    // goToNextView = () => {
    //     this.setState({animatePayTabNextView: 'view-swipe-down'});
    //     setTimeout(() => {
    //         this.props.goToNextViewCallback();
    //     }, 300);
    // }

    render() {
        return (
            <div id="payTabNextViewContainer" className="gradientDark">
                <div id="payTabNextViewBtn" onClick={this.goToPayNow}>Pay Now</div>
            </div>
        );
    }
}

export default ViewTabNextViewBtn;
