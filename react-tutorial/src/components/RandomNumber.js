import React from 'react'
import ReactDom from 'react-dom';

class RandomNumber extends React.Component {

    updateNumber() {
        let value = Math.round(Math.random() * 100);
        this.props.onUpdate(value);
    }

    constructor(props) {
        super(props);
        this.updateNumbers = this.updateNumber.bind(this);
    }

    render() {
        return (
            <div>
                <h1>RANDOM NUMBER : { this.props.number } </h1>
                <button onClick={this.updateNumbers}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;