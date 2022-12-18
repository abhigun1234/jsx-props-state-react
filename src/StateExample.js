import React, { Component } from 'react'

export default class StateExample extends Component {

    constructor(props){
     
        super(props)
        this.state={name:"ravi",phone_no:"8888888888"}
        this.setData=this.setData.bind(this)
    }
    setData(){
        console.log("this",this)
        this.setState({name:'shyam',phone_no:"0000000000"})

    }
  render() {
    return (
      <div>name :{this.state.name}
      <h1> {this.state.phone_no}</h1>
      <button onClick={this.setData}>setData</button>
      </div>
    )
  }
}
