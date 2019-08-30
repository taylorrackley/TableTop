import React, { Component } from 'react';
import './paymentDetails.css';
// import { Link, Redirect } from 'react-router-dom';

import MaskedInput from 'react-text-mask'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { userCardUpdate, getUserCard } from '../../store/actions/creditCardActions'

class PaymentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cc_number: this.props.profile.cc_number || '',
            cc_pin: this.props.profile.cc_pin || '',
            cc_expire: this.props.profile.cc_expire || '',
            cc_name: this.props.profile.cc_name || ''
        };
    }

    handleChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // if(this.validForm()) {
            let card = {
                cc_number: this.state.cc_number,
                cc_pin: this.state.cc_pin,
                cc_expire: this.state.cc_expire,
                cc_name: this.state.cc_name
            }
            console.log(card);
            this.props.userCardUpdate(card);
            this.setState({cardUpdated: true});
        // }
    }

    componentDidMount() {
        this.props.getUserCard();
    }

    render() {

        if (this.state.cardUpdated) {
            this.props.history.goBack()
        }

        return (
            <div className="container">
                <div id="editProfileWrapper">
                    <p id="editProfleImageText">Payment Method</p>
                    <form onSubmit={this.handleSubmit} id="editProfileForm">
                        <div className="editProfileInputSection">
                        <input name="cc_name" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.cc_name} placeholder="Name on Card" />
                            <input name="cc_number" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.cc_number} placeholder="Card Number" />
                            <MaskedInput
                                name="cc_pin" className="editProfileInputField editProfileInputLeft" type="text" onChange={this.handleChange} value={this.state.cc_pin} placeholder="CVV"
                                mask={[/[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                            <MaskedInput
                                name="cc_expire" className="editProfileInputField editProfileInputRight" type="text" onChange={this.handleChange} value={this.state.cc_expire} placeholder="Date"
                                mask={[/[0-1]/, /[0-9]/, '/', /[0-9]/, /[0-9]/]}
                            />
                        </div>
                        <button className="editProfileInputField editProfileSubmit">Update Card</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserCard: () => dispatch(getUserCard()),
        userCardUpdate: (card) => dispatch(userCardUpdate(card))
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        // card: state.creditCard.card,
        profile: state.firebase.profile
    }
}

export default compose(
    firestoreConnect(),
    connect(mapStateToProps, mapDispatchToProps)
)(PaymentDetails);
