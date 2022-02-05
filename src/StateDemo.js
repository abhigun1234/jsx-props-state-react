import React, { Component } from 'react';
import './style.css'
import styles from './style.module.css'
class StateDemo extends Component {
    constructor(){

        super()
        this.state={message:'hello'}
        this.changeName=this.changeName.bind(this)
    }
    changeName(){
        alert("hello")
        console.log("this",this)
        this.setState({message:'bye'})
    }
    render() {
        return (
            <div>
                {this.state.message}
                <button className="error" onClick={this.changeName}>change</button>
                <button className={styles.sucssess} onClick={this.changeName}>change</button>
            </div>
        );
    }
}

export default StateDemo;