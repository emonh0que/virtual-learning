import React from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faJetFighterUp } from '@fortawesome/free-solid-svg-icons'
const Form = () => {
    return (
        <div className='subscription-section'>
            
                <div className='input-container'>
                    <input type="text" placeholder='Enter your email address here' />
                    <button className='fw-bolder'><FontAwesomeIcon icon={faJetFighterUp} /> subscribe</button>
                </div>
                <div className='subscribe'>
                    <input type="checkbox" name="" id="" /> 
                   <small>I agree to the privacy Policy</small>
                </div>


            
        </div>
    );
};

export default Form;