import React, { Component } from "react";
import { SearchForm } from "./SearchForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
