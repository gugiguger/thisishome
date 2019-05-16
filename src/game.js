import React from "react";
import Choice from "./choice";
import Ending from "./ending";
import adventures from "./adventures";
import Typed from "react-typed";
import Typist from "react-typist";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_adventure: 0,
            adventures: adventures
        };
        this.changeAdventure = this.changeAdventure.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    changeAdventure(to) {
        this.setState({
            current_adventure: to
        });
    }
    resetGame() {
        this.setState({
            current_adventure: 0
        });
    }

    showChoices(data) {
        if (data.options) {
            let choices = data.options.map(data => {
                return (
                    <Choice
                        key={data.label}
                        details={data}
                        changeAdventure={this.changeAdventure}
                    />
                );
            });

            return choices;
        } else if (data.ending) {
            return (
                <Ending
                    key={data.ending.code}
                    ending={data.ending}
                    resetGame={this.resetGame}
                />
            );
        }
    }
    render() {
        let data = this.state.adventures[this.state.current_adventure];
        let text = data.text.split("\n").map(function(el) {
            return (
                <Typist avgTypingSpeed={20} className="description" key={el}>
                    {el}
                </Typist>
            );
        });

        return (
            <div>
                <div className="screen">
                    <div className="main-container">
                        <div className="lines" />
                        <div className="main">
                            <div className="noise" />
                            <h1 className="vhs">
                                <span className="text-wrapper">
                                    <span className="letters">VHS</span>
                                </span>
                            </h1>
                            <div className="time">
                                <span id="time" />
                            </div>
                            <div className="counter">
                                REC <label id="minutes">00</label>:
                                <label id="seconds">00</label>
                            </div>
                        </div>
                        <div
                            className="img-container"
                            style={{
                                backgroundImage: "url(" + data.image + ")",
                                backgroundSize: "cover"
                            }}
                        />
                        <div className="current-adventure">{text}</div>
                        <div className="choices">{this.showChoices(data)}</div>
                    </div>
                </div>
                <div className="toggle">
                    <div id="playpausebtn">Mute/Unmute</div>
                    <div id="switcher-tv">Turn on/off</div>
                </div>
            </div>
        );
    }
}
