import React, {Component} from 'react'

class Item extends Component {
    state = {
        quantity: 0
    };

    reset = () => {
        this.setState({
           quantity: 0
        });
    }

    handleDecrement = () => {
        this.setState({
           quantity: this.state.quantity - 1
        });
        this.props.handleDecrement();
        console.log(this.props)
    }

    handleIncrement = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
        this.props.handleIncrement();
    }

    render() {
        return (
            <div style={item}>
                <button style={button} onClick={this.handleDecrement}>- 1</button>
                <p>{this.props.itemName + " " + this.state.quantity}</p>
                <button style={button} onClick={this.handleIncrement}>+ 1</button>
            </div>
        );
    }
}

const item = {
    display: 'flex',
    justifyContent: 'space-between'
}

const button = {
    backgroundColor: '#d0d1ca',
    borderStyle: "solid",
    borderRadius: '5px',
    height: '3em',
    width: '3em',
    fontsize: '18px',
    margin: '14px'
}

export default Item;
