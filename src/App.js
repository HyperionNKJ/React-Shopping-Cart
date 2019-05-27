import React, { Component } from 'react';
import './App.css';
import Shoppinglist from './code/Shoppinglist'
import CheckoutButton from './code/CheckoutButton'

class App extends Component {

    constructor(props) {
        super(props);
        this.shoppingList = React.createRef();
    }

    state = {
      numItems: 0
    };

    handleReset = () => {
      this.setState({
          numItems: 0
      });
      this.shoppingList.current.reset();
    }

    handleIncrement = () => {
      this.setState({
        numItems: this.state.numItems + 1
      });
    }

    handleDecrement = () => {
      this.setState({
        numItems: this.state.numItems - 1
      });
    }

    getPurchaseList = () => {
        return []
        // return this.shoppingList.current.getPurchaseList() // WHY NOT WORKING?
    }

    render() {
      return (
          <div style={container}>
            <h3> You have {this.state.numItems} items in your cart.</h3>
            <Shoppinglist ref = {this.shoppingList}
                increment={this.handleIncrement}
                decrement={this.handleDecrement}
                reset={this.handleReset}
            />
            <button onClick={this.handleReset}>Reset</button>
            <CheckoutButton purchaseList={this.getPurchaseList}/>
          </div>
      )
    }
}

const container = {
  width: '40%',
  margin: '10px'
}

export default App;
