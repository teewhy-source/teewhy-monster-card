import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div className=''> 
        <h1 className='title'>TEEWHY'S MONSTER CARD  </h1>
         <input 
      className="search-box"
      type="search"
      placeholder={this.props.placeholder}
      onChange={this.props.onsearchfunction}
    />
    </div>
    )
  }
}
