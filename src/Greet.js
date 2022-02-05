import React from 'react';

function Greet(props) {
    console.log("props",props)
    return (
        <div>
            {props.name}
            {props.children}
        </div>
    );
}

export default Greet;