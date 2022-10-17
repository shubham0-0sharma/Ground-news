import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <News key = "general"  
                                category="general"
                                pageSize={8}
                                country="in"
                            />
                        </Route>

                        <Route exact path="/business">
                            <News key = "business"
                                category="business"
                                pageSize={8}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/general">
                            <News key = "general"
                                category="general"
                                pageSize={8}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/entertainment">
                            <News key = "entertainmen"
                                category="entertainment"
                                pageSize={8}
                                country="in"
                            />
                        </Route>
                        <Route path="/health">
                            <News key = "science" category="health" pageSize={8} country="in" />
                        </Route>
                        <Route path="/science">
                            <News key = ""
                                category="science"
                                pageSize={8}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/sports">
                            <News key = "sports" category="sports" pageSize={8} country="in" />
                        </Route>
                        <Route exact path="/technology">
                            <News key = "technology"
                                category="technology"
                                pageSize={8}
                                country="in"
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
