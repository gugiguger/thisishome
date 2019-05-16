import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./intro";
import Game from "./game";

const Main = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Intro} />
                <Route path="/game" component={Game} />
            </div>
        </Router>
    );
};

export default Main;
