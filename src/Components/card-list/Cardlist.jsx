import React, { Component } from "react";
import Card from "./Card";

 class CardList extends Component {
  render() {
    console.log("render");
    let { names } = this.props;

    return (
      <div className="parent">
        {names.map((person) => { 
          return (
         <Card name={person}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
