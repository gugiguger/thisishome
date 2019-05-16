import React from "react";
import Typist from "react-typist";
import Typed from "react-typed";

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
                <div id="titletext">
                    <h1>
                        THIS IS{" "}
                        <span>
                            <Typed
                                strings={[
                                    "HOME",
                                    "ZUHAUSE",
                                    "الصفحة الرئيسية",
                                    "RUMAH",
                                    "בית",
                                    "Nhà",
                                    "家",
                                    "HUIS",
                                    "CASA",
                                    "KOTI",
                                    "MAISON",
                                    "кућа",
                                    "Главная",
                                    "NYUMBA"
                                ]}
                                typeSpeed={50}
                                backSpeed={60}
                                loop
                            />
                        </span>{" "}
                    </h1>
                </div>
                <h2 id="starttext">PRESS ENTER TO START</h2>
                <audio id="#" src="" type="audio/wav" autoPlay loop />
            </div>
        );
    }
}
