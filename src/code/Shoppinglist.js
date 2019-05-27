import React, {Component} from 'react'
import Item from './Item'

class Shoppinglist extends Component {

    constructor(props) {
        super(props);
        // this.apple = React.createRef();
        // this.banana = React.createRef();
        // this.cranberry = React.createRef();
        this.state = {
            refs: []
        }
    }

    reset = () => {
        this.state.refs.forEach((item) => item.reset());
        // this.apple.current.reset();
        // this.banana.current.reset();
        // this.cranberry.current.reset();
    }

    getPurchaseList = () => {
        return this.state.refs.map((item) => item.state.quantity);
    }

    render() {
        const {increment, decrement, reset} = this.props;
        return (
            <div style={shoppingStyle} >
                <Item ref={(input) => {this.state.refs[0] = input }} itemName={"Apple"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset} />
                <Item ref={(input) => {this.state.refs[1] = input }} itemName={"Banana"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset}/>
                <Item ref={(input) => {this.state.refs[2] = input }} itemName={"Cranberry"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset}/>
            </div>
        );
    }
}

const shoppingStyle = {
    display: 'flex',
    flexDirection: "column"
}

export default Shoppinglist;

