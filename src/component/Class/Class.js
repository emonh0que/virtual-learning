import React from 'react';

const Class = (props) => {
    return (
        <div>
            <img width="250" height="250" src={props.img} alt="" />
            <h5>{props.classTitle}</h5>
            <p>{props.classDescription}</p>
        </div>
    );
};

export default Class;