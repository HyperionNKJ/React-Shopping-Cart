import React, {Component} from 'react'

class CheckoutButton extends Component {
    state = {
        hasCheckout: false
    };

    showPrice = () => {
        this.setState({
            hasCheckout: true
        });
    }

    totalPrice = () => {
        let i, totalPrice = 0;
        const purchased = this.props.purchaseList()
        for (i = 0; i < purchased.length; i ++) {
            totalPrice += (purchased[i] * (i + 1))
        }
        return totalPrice
    }

    render() {
        const visibilityState = this.state.hasCheckout ? 'visible' : 'hidden';
        return (
            <div>
                <button onClick={this.showPrice}>Checkout!</button>
                <h3 style={{visibility: visibilityState}}>Total: {this.totalPrice()} </h3>
            </div>
        );
    }
}

export default CheckoutButton;
