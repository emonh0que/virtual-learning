import React from 'react';
import './Courses.css';
const Courses = (props) => {
    return (
        <div className='card-section'>
            <img width="300" height="300" src={props.img} alt="" />
            <h4>{props.text}</h4>
            <h5>By {props.author}</h5>
        </div>
    );
};

export default Courses;