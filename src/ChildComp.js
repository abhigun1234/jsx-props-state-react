import React from 'react';

function ChildComp(props) {
    console.log("props",props)
    return (
        <div>
            <button onClick={()=>props.greeHandler("ram")}>callParent</button>
        </div>
    );
}

export default ChildComp;