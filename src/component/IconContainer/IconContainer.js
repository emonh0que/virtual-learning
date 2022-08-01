import React from 'react';
import Icon from '../Icon/Icon';
import './IconContainer.css';
const IconContainer = () => {
    return (
        <div className='icon-container mb-5'>
            <Icon icon='faSchool'></Icon>
            <Icon icon='faLifeRing'></Icon>
            <Icon icon='faPersonChalkboard'></Icon>
            <Icon icon='faGraduationCap'></Icon>
        </div>
    );
};

export default IconContainer;