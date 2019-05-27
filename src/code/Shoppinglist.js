import React, {Component} from 'react'
import Item from './Item'

class Shoppinglist extends Component {

    constructor(props) {
        super(props);
        this.apple = React.createRef();
        this.banana = React.createRef();
        this.cranberry = React.createRef();
    }

    state = {};

    reset = () => {
        this.apple.current.reset();
        this.banana.current.reset();
        this.cranberry.current.reset();
    }

    render() {
        const {increment, decrement, reset} = this.props;
        return (
            <div style={shoppingStyle} >
                <Item ref={this.apple} itemName={"Apple"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset} />
                <Item ref={this.banana} itemName={"Banana"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset}/>
                <Item ref={this.cranberry} itemName={"Cranberry"} handleIncrement={increment} handleDecrement={decrement} handleReset={reset}/>
            </div>
        );
    }
}

const shoppingStyle = {
    display: 'flex',
    flexDirection: "column"
}

export default Shoppinglist;

