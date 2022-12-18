import React from 'react';

function Child(props) {
    return (
        <div>
          <button onClick={()=>props.greetHandler("ram")}>greet parent</button>  
        </div>
    );
}

export default Child;