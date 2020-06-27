import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //this.handleChange = this.handleChange.bind(this); // better: Avoids TypeError // better to define here since it affects all calls to handleChange
  }

  /*
  handleChange(e) {
    this.setState({ searchField: e.target.value }); // TypeError: Cannot read property 'setState' of undefined 2of2
  }
  */

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }); // best: Avoids TypeError // best to define here because most concise
  };

  render() {
    const { monsters, searchField } = this.state;

    console.log("yo"); // why does this print twice?
    return <div className="App"></div>;
  }
}
export default App;
