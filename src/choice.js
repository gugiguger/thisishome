import React from "react";

export default class Choice extends React.Component {
    onButtonClick(to) {
        this.props.changeAdventure(to);
    }
    render() {
        var details = this.props.details;
        return (
            <a
                className="button"
                onClick={this.onButtonClick.bind(this, details.to)}
            >
                {details.label}
            </a>
        );
    }
}
