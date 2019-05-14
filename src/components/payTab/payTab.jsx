import React, { Component } from 'react';
import './payTab.css';
import closeIcon from '../../img/close_icon.png';
import TablePin from './tablePin/tablePin';
import CheckDetails from './checkDetails/checkDetails';

class PayTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePayTabContainer: 'view-invisable',
            animatePayTabView: 'view-swipe-down',
            currentView: <TablePin goToCheckDetails={this.goToCheckDetails} />,
            checkDetails: {
                subtotal: 420.00,
                tax: 69.00,
                tip: 848.00,
                total: 1337.00,
                items: {}
            }
        }
    }

    componentDidMount(){
       setTimeout(() => {
           this.setState({animatePayTabContainer: 'view-visible-blurry'});
           this.setState({animatePayTabView: 'view-swipe-up'})
       }, 0);
    }

    closeTabView = () => {
        this.setState({animatePayTabContainer: 'view-invisable'});
        setTimeout(() => {
            this.props.hidePayTabView();
        }, 300);
    }

    goToCheckDetails = (pin) => {
        this.setState({animatePayTabView: 'view-swipe-down'});
        setTimeout(() => {
            this.setState({currentView: <CheckDetails checkDetails={this.state.checkDetails}/>});
            this.setState({animatePayTabView: 'view-swipe-up'});
        }, 700);
    }

    render() {
        return (
            <div id="paytab-container" className={this.state.animatePayTabContainer}>
                <div id="paytab-view" className={this.state.animatePayTabView}>
                    <div id="padding-for-close-view">
                        <img className="close-view" src={closeIcon} onClick={this.closeTabView} alt="Close Pay Tab View" />
                    </div>
                    {this.state.currentView}
                </div>
            </div>
        );
    }
}

export default PayTab;
