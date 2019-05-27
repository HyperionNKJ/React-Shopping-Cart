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
        const {numApple, numBanana, numCranberry } = this.props;
        return numApple * 1 + numBanana * 2 + numCranberry * 3;
    }

    render() {
        return (
            <div>
                <button onClick={this.showPrice}>Checkout!</button>
                <h3 hidden={!this.hasCheckout}>Total: {this.totalPrice()} </h3>
            </div>
        );
    }
}

export default CheckoutButton;
