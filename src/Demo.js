import React, { createElement } from 'react';

function Demo(props) {
    function clickMe(str){
        alert(str)
    }
    return (
        <div>
           <button onClick={()=>clickMe('abhi')}>click</button>
        </div>
    );
    // return React.createElement('div',null,React.createElement('h1',null,"hi"),)
}

export default Demo;