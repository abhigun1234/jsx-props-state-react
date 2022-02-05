import React from 'react';

function EventFunction(props) {
function clickMe(str){
    console.log("hello",str)
}
    return (
        <div>
           <button onClick={()=>clickMe("abhi")}>clickMe</button> 
        </div>
    );
}

export default EventFunction;