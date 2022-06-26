import React from 'react';

function AboutUs(props) {
  console.log("props",props)
    //jsx 
    return (
        <div>
            About US
            {props.mydata}
        </div>
    );
}

export default AboutUs;