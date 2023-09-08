import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let {name,id, email}=this.props.name; 
    return (
      <div>
          <div className="ty" key={id}> 
              <img
                src={`https://robohash.org/${id}@set&size=180x180`}
                alt={`Robot ${name}`}
              />
              <h2>{name}</h2> 
              <p>{email}</p> 
            </div>
      </div>
    )
  }
}
