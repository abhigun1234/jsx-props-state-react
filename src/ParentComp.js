import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    greetParent(str){
    alert("hello"+"  "+str)
    }
  render() {
   return (
     <ChildComp  name="rajiv" greeHandler={this.greetParent}></ChildComp>
    )
  }
}
