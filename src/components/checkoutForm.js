import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

export default class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("onsubmit")
    const {stripe, elements} = this.props;

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    
    if (error) {
      console.log('Error:', error);
      // Handle payment method creation error
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Handle successful payment method creation
    }
  
    
  };

  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}