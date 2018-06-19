import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      carparks: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://carparks-sg.herokuapp.com/api");
    const data = await response.json();
    this.setState({
      carparks: data
    });
  }

  render() {
    return (
      <div>
        <h3>Carparks</h3>
        <ul>
          {this.state.carparks.map((carpark, index) => (
            <li key={index}>
              {carpark.Development} / {carpark.Area} (Lots: {carpark.Lots})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
