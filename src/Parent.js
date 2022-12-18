import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props){

        super(props)
        this.state={
            parentName:'Parent'
        }
    }
    greetParent(str){
        alert("hello"+" "+str)
    }
  render() {
    return (
            <Child greetHandler={this.greetParent}></Child>
    )
  }
}
