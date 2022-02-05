import React, { Component } from 'react';
import './style.css'
import styles from './style.module.css'
class StateDemoForClass extends Component {

   constructor(){

   super()
   this.state={name:'abhishek',address:'pune'}
   this.changeName=this.changeName.bind(this)

   }
   changeName(){
    console.log("this",this)
    this.setState({name:'ravi'})
   }
    render() {
        return (
            <div className={styles.sucssess}>
               {this.state.name}   
               <button onClick={this.changeName}>changeName</button>
            </div>
        );
    }
}

export default StateDemoForClass;