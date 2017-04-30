import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";

let state = [
  {
    index: 1,
    state: "constructor"
  },
  {
    index: 2,
    state: "componentWillMount"
  },
  {
    index: 3,
    state: "render"
  },
  {
    index: 4,
    state: "componentDidMount"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    console.debug("constructor");
    this.state = {
      current_state: props.current_state
    };
  }

  componentWillMount() {
    setTimeout(() => {
      console.debug("componentWillMount");
      this.setState({ current_state: "componentWillMount" });
    }, 2000);
  }

  componentDidMount() {
    setTimeout(() => {
      console.debug("componentDidMount");
      this.setState({ current_state: "componentDidMount" });
    }, 5000);
  }

  componentWillReceiveProps(nextProps) {
    console.debug("componentWillReceiveProps", nextProps);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello React !!!!!!!
          <h4>Component State Flow</h4>
        </p>
        <div className="state-container">
          {state.map(s => {
            let classes = "state-div " + (this.state.current_state === s.state ? "active" : "" )
            console.log(classes)
            return (
              <div className={classes}>
                {s.state}
              </div>
            );
          })}         
        </div>
      </div>
    );
  }
}

export default App;
