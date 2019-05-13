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

// class Game extends React.Component({
//     getInitialState: function() {
//         return {
//             current_adventure: 0,
//             adventures: adventures
//         };
//     },
//     changeAdventure: function(to) {
//         this.setState({
//             current_adventure: to
//         });
//     },
//     resetGame: function() {
//         this.setState({
//             current_adventure: 0
//         });
//     },
//     showChoices: function(data) {
//         if (data.options) {
//             var choices = data.options.map(data => {
//                 return (
//                     <Choice
//                         key={data.label}
//                         details={data}
//                         changeAdventure={this.changeAdventure}
//                     />
//                 );
//             });
//
//             return choices;
//         } else if (data.ending) {
//             return <Ending key={data.ending.code} ending={data.ending} />;
//         }
//     },
//     render() {
//         var data = this.state.adventures[this.state.current_adventure];
//         var text = data.text.split("\n").map(function(el) {
//             return <p key={el}>{el}</p>;
//         });
//
//         return (
//             <div
//                 className="main-container"
//                 style={{ backgroundImage: "url(" + data.image + ")" }}
//             >
//                 <nav>
//                     <h1 onClick={this.resetGame}>
//                         <span className="title">This is</span> Home
//                     </h1>
//                 </nav>
//                 <div className="current-adventure">
//                     {text}
//                     <div className="choices">{this.showChoices(data)}</div>
//                 </div>
//             </div>
//         );
//     }
// });
//
// const NotFound = () => {
//     return (
//         <div>
//             <h2>NotFound</h2>
//         </div>
//     );
// }

export default Main;
