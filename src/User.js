import React from 'react';

function User(props) {
    console.log("props",props)
    return (
        <div>
             Hello
             {props.name}
             {props.email}
        </div>
    );
}

export default User;