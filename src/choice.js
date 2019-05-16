import React from "react";
import Typist from "react-typist";

export default class Choice extends React.Component {
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
            15800
        );
    }

    onButtonClick(to) {
        this.props.changeAdventure(to);
    }

    render() {
        let renderContainer = false;
        let details = this.props.details;
        if (this.state.render) {
            renderContainer = (
                <a
                    id="choice-button"
                    onClick={this.onButtonClick.bind(this, details.to)}
                >
                    {details.label}
                </a>
            );
        }
        return renderContainer;
    }
}
