import React, { Component } from 'react';

export default class Consumer extends Component {
    constructor(props){
         console.log("cunsumer data",props)
        super(props)
    }
  render() {
    return <div><h1>{this.props.name}</h1>
    <h2>{this.props.email}</h2></div>;
  }
}
