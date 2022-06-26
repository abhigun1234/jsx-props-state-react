import React from 'react';

function EventDemo(props) {
    function clickMe(str){
console.log("hello",str)
    }
    return (
        <div>
            <button onClick={()=>clickMe('abhi')}>clickMe</button>
        </div>
    );
}

export default EventDemo;