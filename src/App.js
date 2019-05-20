import React from "react";
import "./App.css";
import { MyContext } from "./context";

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
  }

  handleXClick = () => {
    this.setState({
      x: this.state.x + 1
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          // const { x } = context.state;
          return (
            <div className="component-A">
              <h1>Component A</h1>
              The state in the component A is {context.x} <br />
              this.handleXClick will set the state to a new value =>{" "}
              {"this.setState({x: this.state.x + 1})"} <br />
              <B />
              <D />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

class B extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="component-B">
              <h1>Component B</h1>
              this.props.x = {context.x} <br />
              this.props.onXClick => (method from component A) <br />
              <C />
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
class C extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="component-C">
              <h1>Component C</h1>
              this.props.x = {context.x} <br />
              this.props.onXClick => (method passed from component B) <br />
              <button onClick={context.handleXClick}>{context.x}</button>{" "}
              onClick => this.props.onXClick
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
class D extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="component-D">
              <h1>Component D</h1>
              this.props.x = {context.x} <br />
              this.props.onXClick => (method from component A) <br />
              <button onClick={context.handleXClick}>{context.x}</button>{" "}
              onClick => this.props.onXClick
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

function App() {
  return (
    <div className="App">
      <A />
    </div>
  );
}

export default App;
