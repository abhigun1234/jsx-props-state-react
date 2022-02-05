import React, { Component } from 'react';

export default class EventClass extends Component {
    constructor(){
    super()
    }
    clickMe(str){

        console.log("hello",str)
    }
  render() {
    return <div>

        <button onClick={()=>this.clickMe('abhi')}>click</button>
    </div>;
  }
}
