import React from 'react';
import './Icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faLifeRing, faPersonChalkboard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const Icon = (props) => {
    const whatIcon = props.icon;
    
    return (
        <div>
           
            {
               whatIcon === 'faSchool' ? <FontAwesomeIcon className="icon-section" icon={faSchool} /> : null 
            }
            {
                whatIcon === 'faLifeRing' ? <FontAwesomeIcon className="icon-section" icon={faLifeRing} /> : null 
            }
            {
                whatIcon === 'faPersonChalkboard' ? <FontAwesomeIcon className="icon-section" icon={faPersonChalkboard} /> : null 
            }
            {
                whatIcon === 'faGraduationCap' ? <FontAwesomeIcon className="icon-section" icon={faGraduationCap} /> : null 
            }
            <h4>Online Courses</h4>
            <h5>Get the best Education Internet has to Offer</h5>
        </div>
    );
};

export default Icon;