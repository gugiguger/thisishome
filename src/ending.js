import React from "react";
import adventures from "./adventures";

export default class Ending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false
        };
    }

    componentDidMount() {
        setTimeout(
            function() {
                this.setState({ render: true });
            }.bind(this),
            17500
        );
    }
    render() {
        let renderContainer = false;
        let ending = this.props.ending;
        if (this.state.render) {
            renderContainer = (
                <div id="dark-screen">
                    <div id="endgame">
                        <p id={ending.code}>{ending.text}</p>
                        <h2 onClick={this.props.resetGame}>Reset</h2>
                    </div>
                </div>
            );
        }
        return renderContainer;
    }
}
