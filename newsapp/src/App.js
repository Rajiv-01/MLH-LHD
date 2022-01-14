import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />

          <Switch>
            <Route exact path="/">
              <News
                changeProgress={this.setProgress}
                key={"general"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"general"}
              />
            </Route>
            <Route exact path="/General">
              <News
                changeProgress={this.setProgress}
                key={"general"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"general"}
              />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/Business">
              <News
                changeProgress={this.setProgress}
                key={"business"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"business"}
              />
            </Route>
            <Route exact path="/Science">
              <News
                changeProgress={this.setProgress}
                key={"science"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"science"}
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                changeProgress={this.setProgress}
                key={"entertainment"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"entertainment"}
              />
            </Route>
            <Route exact path="/Sports">
              <News
                changeProgress={this.setProgress}
                key={"sports"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"sports"}
              />
            </Route>
            <Route exact path="/Health">
              <News
                changeProgress={this.setProgress}
                key={"health"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"health"}
              />
            </Route>
            <Route exact path="/Technology">
              <News
                changeProgress={this.setProgress}
                key={"technology"}
                pagesize={9}
                country={"in"}
                apikey={this.apiKey}
                category={"technology"}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
