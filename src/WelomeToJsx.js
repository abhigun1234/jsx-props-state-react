import React from 'react';

function WelomeToJsx(props) {
    return (
        <div>
         <h1>   Hi all how are you {props.name}</h1>
         <h2>   Hi all how are you {props.address}</h2>
         <h3>   Hi all how are you {props.children}</h3>
        </div>
    );
//      return React.createElement('div',{id:'hello'},React.createElement('h1',null,'hello how are you'))
// }
}

export default WelomeToJsx;