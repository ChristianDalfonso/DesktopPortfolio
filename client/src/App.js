import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Desktop from "./Components/Desktop/Desktop";

// import "/assets/.scss";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Desktop></Desktop>
      </div>
    );
  }
}

export default App;
