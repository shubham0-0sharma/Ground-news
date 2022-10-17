import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    pageSize = 10;
    apikey = "547045be7e80476d8b4b88137f87d3a4";
    state = {
        progress: 0,
    };
    setProgress = (progress) => {
        this.setState({
            progress: progress,
        });
    };

    render() {
        return (
            <div>
                <Router>
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                        height={3}
                    />
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="general"
                                category="general"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>

                        <Route exact path="/business">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="business"
                                category="business"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/general">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="general"
                                category="general"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/entertainment">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="entertainmen"
                                category="entertainment"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route path="/health">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="science"
                                category="health"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route path="/science">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key=""
                                category="science"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/sports">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="sports"
                                category="sports"
                                pageSize={this.pageSize}
                                country="in"
                            />
                        </Route>
                        <Route exact path="/technology">
                            <News
                                setProgress={this.setProgress}
                                apikey={this.apikey}
                                key="technology"
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
