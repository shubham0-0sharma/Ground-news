import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./index.css";
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
            <BrowserRouter>
                <div>
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                        height={3}
                    />
                    <NavBar />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="general"
                                    category="general"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />

                        <Route
                            path="/business"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="business"
                                    category="business"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            path="/general"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="general"
                                    category="general"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="entertainmen"
                                    category="entertainment"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            path="/health"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="science"
                                    category="health"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            path="/science"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key=""
                                    category="science"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            path="/sports"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="sports"
                                    category="sports"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                        <Route
                            path="/technology"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    apikey={this.apikey}
                                    key="technology"
                                    category="technology"
                                    pageSize={this.pageSize}
                                    country="in"
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
