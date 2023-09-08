import React, { Component } from "react";
import Cardlist from "./Components/card-list/Cardlist";
import Searchbox from "./Components/search-box/Searchbox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((taiye) => 
        this.setState(
          () => {
            return { names: taiye };
          },
          () => {
            console.log(this.state);
          }
        )
      ); 
  }
 
  onsearch = (event) => {
    let searchfield = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchfield };
    });
  };

  render() {
    let {names, searchfield}=this.state;
    let {onsearch}=this;
    let teewhyfilter = names.filter((names) => {
      return names.name.toLocaleLowerCase().includes(searchfield);
    });
    return (
      <>
    
      <Searchbox onsearchfunction={onsearch} placeholder="pls search data"/>
      <Cardlist names={teewhyfilter}/>
     
      </>
    );
  }
}
