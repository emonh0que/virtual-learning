import React, { useEffect, useState } from 'react';
import ShowUser from '../ShowUser/ShowUser';
import './Faculty.css';
const Faculty = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    },[])
    console.log(users);
    return (
        <div className="faculty">
            <h4>Meet one of the most talented people in the relevant field</h4>
            <div className='faculty-container'>
               {
                users.map(user => <ShowUser user={user}/>)
            } 
            </div>
            
        </div>
    );
};

export default Faculty;