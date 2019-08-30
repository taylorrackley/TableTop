import React, { Component } from 'react';
import './viewTab.css';

import Navbar from '../navbar/navbar';
import ViewTabDetails from './viewTabDetails/viewTabDetails';
import PayTabBtn from './payTabBtn/payTabBtn';
import ViewTabOverview from './viewTabOverview/viewTabOverview';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { findTabWithPin } from '../../store/actions/tabActions';

class ViewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatePayTabContainer: 'view-invisable'
            // Get user default tip %?
        }
    }

    componentDidMount() {
        console.log('Mounted');
        this.props.findTabWithPin(this.props.location.state.pin);
        setTimeout(() => {
            this.setState({animatePayTabContainer: 'view-visible'});
        }, 0);
    }

    render() {
        if (this.props.tab) {
            return (
                <div className={'container gradient '+this.state.animatePayTabContainer}>
                    <Navbar insertedText="Your Tab:" />
                    <ViewTabOverview tabDetails={this.props.tab} tip={20} />
                    <ViewTabDetails tabDetails={this.props.tab} tip={20} />
                    <PayTabBtn />
                </div>
            );
        }
        return null;
    }
}

// Turns dispatch methods into prop methods
const mapDispatchToProps = (dispatch) => {
    return {
        findTabWithPin: (pin) => dispatch(findTabWithPin(pin))
    }
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab.tab
    };
}

export default compose(
    firestoreConnect(),
    connect(mapStateToProps, mapDispatchToProps)
)(ViewTab);
