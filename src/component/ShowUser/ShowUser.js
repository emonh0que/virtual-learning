import React from 'react';

const ShowUser = (props) => {
    const {name, picture} = props.user;
    const fullName = name.first + ' ' +  name.last;
    const img = picture.large;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{fullName}</h3>
           
        </div>
    );
};

export default ShowUser;