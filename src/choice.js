import React from "react";

export default class Choice extends React.Component {
    onButtonClick(to) {
        this.props.changeAdventure(to);
    }
    render() {
        let details = this.props.details;
        return (
            <button
                className="button"
                onClick={this.onButtonClick.bind(this, details.to)}
            >
                {details.label}
            </button>
        );
    }
}
