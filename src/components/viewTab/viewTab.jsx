import React, { Component } from 'react';
import './viewTab.css';

import Navbar from '../navbar/navbar';
import ViewTabDetails from './viewTabDetails/viewTabDetails';
import PayTabBtn from './payTabBtn/payTabBtn';
import ViewTabOverview from './viewTabOverview/viewTabOverview';

import { Redirect } from 'react-router-dom';

class ViewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePayTabContainer: 'view-invisable',
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
        // console.log(this.state.tabDetails.items);
       setTimeout(() => {
           this.setState({animatePayTabContainer: 'view-visible'});
       }, 0);
    }
    
    render() {
        if(false) {
            return (
                <Redirect push to='/' />
            );
        }

        return (
            <div className={'container gradient '+this.state.animatePayTabContainer}>
                <Navbar insertedText="Your Tab:" />
                <ViewTabOverview tabDetails={this.state.tabDetails} />
                <ViewTabDetails tabDetails={this.state.tabDetails} />
                <PayTabBtn />
            </div>
        );
    }
}

export default ViewTab;
