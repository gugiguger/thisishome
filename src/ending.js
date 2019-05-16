import React from "react";
import adventures from "./adventures";

export default class Ending extends React.Component {
    render() {
        let ending = this.props.ending;
        return (
            <div id="endgame">
                <p id={ending.code}>{ending.text}</p>
                <h2 onClick={this.props.resetGame}>Reset</h2>
            </div>
        );
    }
}
