import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Routing";
class App extends Component {
  render() {
    return (
      <div className="App">


        <BrowserRouter>
          <Router />
        </BrowserRouter>


      </div>
    );

  }

}

export default App;
