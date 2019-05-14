import React from "react";
import adventures from "./adventures";

export default class Ending extends React.Component {
    render() {
        var ending = this.props.ending;
        return (
            <div>
                <p className={ending.code}>{ending.text}</p>
                <h1 onClick={this.props.resetGame}>Reset</h1>
            </div>
        );
    }
}
