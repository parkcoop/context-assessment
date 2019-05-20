import React from "react";

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    x: 0
  };

  handleXClick = () => {
    this.setState(prev => {
      return {
        ...prev.x,
        x: prev.x + 1
      };
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleXClick: this.handleXClick
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
