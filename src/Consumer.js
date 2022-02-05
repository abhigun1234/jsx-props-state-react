import React, { Component } from 'react';

export default class Consumer extends Component {
 

    constructor(props){
         console.log("cunsumer data",props)
   
  
   super(props)
         this.state={name:'ramesh' ,email:'raj@gmail.com'}
         this.changeData=this.changeData.bind(this)
    }

    changeData(str){
        console.log("this",this)
        this.setState({name:str})
    }
  render() {
    return <div><h1>{this.props.name}</h1>
    <h2>{this.props.email}</h2>
    <h3>{this.state.name}</h3>
    <button onClick={()=>this.changeData('rajesh')} >changeData</button>
    </div>;
  }
}
