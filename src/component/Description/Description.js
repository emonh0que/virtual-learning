import React from 'react';
import './description.css';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

const Description = () => {
    return (
        <div className='descripton-section p-5 mt-5'>
            <h4 className='mb-2'>Education makes life better</h4>
            <h1>We Choose Creative <br/>Approach</h1>
            <Button className="rounded-3 p-2" variant="primary">View More</Button>
        </div>
    );
};

export default Description;