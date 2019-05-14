import React from "react";
import Choice from "./choice";
import Ending from "./ending";
import adventures from "./adventures";

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
            var choices = data.options.map(data => {
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
        var data = this.state.adventures[this.state.current_adventure];
        var text = data.text.split("\n").map(function(el) {
            return <p key={el}>{el}</p>;
        });

        return (
            <div>
                <div
                    className="main-container"
                    style={{ backgroundImage: "url(" + data.image + ")" }}
                />
                <div className="current-adventure">{text}</div>
                <div className="choices">{this.showChoices(data)}</div>
            </div>
        );
    }
}
