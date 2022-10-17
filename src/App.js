import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <News key = "general"  
                                category="general"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>

                        <Route exact path="/business">
                            <News key = "business"
                                category="business"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>
                        <Route exact path="/general">
                            <News key = "general"
                                category="general"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>
                        <Route exact path="/entertainment">
                            <News key = "entertainmen"
                                category="entertainment"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>
                        <Route path="/health">
                            <News key = "science" category="health" pageSize={this.pageSize}  country="in" />
                        </Route>
                        <Route path="/science">
                            <News key = ""
                                category="science"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>
                        <Route exact path="/sports">
                            <News key = "sports" category="sports" pageSize={this.pageSize}  country="in" />
                        </Route>
                        <Route exact path="/technology">
                            <News key = "technology"
                                category="technology"
                                pageSize={this.pageSize} 
                                country="in"
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
