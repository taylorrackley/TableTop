import React, { Component } from 'react';
import './viewTab.css';
import Navbar from '../navbar/navbar';
import ViewTabDetails from './viewTabDetails/viewTabDetails';
import ViewTabNextViewBtn from './viewTabNextViewBtn/viewTabNextViewBtn';
import ViewTabOverview from './viewTabOverview/viewTabOverview';

class ViewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePayTabContainer: 'view-invisable',
            currentView: null,
            tabDetails: {
                restaurant: 'McDick',
                subtotal: 18.56,
                tax: 1.30,
                tip: 2.00,
                total: 21.86,
                items: [
                    {name: 'Big Mac', price: 3.56},
                    {name: 'Mac n Cheese', price: 1.00},
                    {name: 'French Fries', price: 10.00},
                    {name: 'Water', price: 0},
                    {name: 'Side of Ranch Sauce', price: 0.50},
                    {name: 'Side of Buffalo Sauce', price: 0.50},
                    {name: 'Sweat Tea', price: 2.50},
                    {name: 'Dr. Pepper', price: 2.50}
                ]
            }
        }
    }

    componentDidMount() {
        console.log(this.state.tabDetails.items);
       setTimeout(() => {
           this.setState({animatePayTabContainer: 'view-visible'});
       }, 0);
    }

    // closeTabView = () => {
    //     this.setState({animatePayTabContainer: 'view-invisable'});
    //     setTimeout(() => {
    //         this.props.hidePayTabView();
    //     }, 300);
    // }

    goToPayTab = () => {

    }

    goToLogin = () => {

    }

    render() {
        var payTabNextViewBtn = this.props.isAuthenticated ?
        <ViewTabNextViewBtn payTabNextViewTxt="Pay Now" payTabNextViewCallback={this.goToPayTab} /> :
        <ViewTabNextViewBtn payTabNextViewTxt="Log In" payTabNextViewCallback={this.goToLogin} />;

        return (
            <div id="paytab-container" className={'gradient '+this.state.animatePayTabContainer}>
                <Navbar insertedText="Your Tab:" />
                <ViewTabOverview tabDetails={this.state.tabDetails} />
                <ViewTabDetails tabDetails={this.state.tabDetails} />
                {payTabNextViewBtn}
            </div>
        );
    }
}

export default ViewTab;
