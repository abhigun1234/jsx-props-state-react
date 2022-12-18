import React from 'react';

function JsxIntro(props) {
    //jsx
    // return (
    //     <div >
    //     <div>
    //         <h1> Hi    Jsx</h1>
    //         </div>         
    //     </div>
    // );
    return React.createElement('div',null,React.createElement('div','null',"How are you"))
}

export default JsxIntro;