import React, { Component } from 'react';

class PropsDataClass extends Component {
    render() {
        return (
            <div>
               {this.props.name}
               {this.props.address}
               {this.props.children} 
            </div>
        );
    }
}

export default PropsDataClass;