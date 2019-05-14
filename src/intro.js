import React from "react";
import TypeIt from "typeit";

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
            window.location.replace("/game");
        }
    }

    render() {
        return (
            <div className="intro">
                <div id="title_text">This is </div>
                <h2>PRESS ENTER TO START</h2>
                <audio id="#" src="" type="audio/wav" autoPlay loop />
            </div>
        );
    }
}
