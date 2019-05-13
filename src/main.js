import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Intro from "./intro";
import Choice from "./choice";
import Ending from "./ending";
import Game from "./game";

import adventures from "./adventures";

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
