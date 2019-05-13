import React from "react";

export default class Ending extends React.Component {
    render() {
        var ending = this.props.ending;
        return <p className={ending.code}>{ending.text}</p>;
    }
}
