import React from "react";

export default class Intro extends React.Component {
    constructor() {
        super();
        this.pressEnter = this.pressEnter.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keypress", this.pressEnter);
    }

    pressEnter(e) {
        if (e.which === 13) {
            window.location.replace("/start");
        }
    }

    render() {
        return <div className="intro">WELCOME</div>;
    }
}
