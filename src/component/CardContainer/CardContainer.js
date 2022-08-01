import React from 'react';
import Courses from '../Courses/Courses';
import './CardContainer.css';
const CardContainer = () => {
    return (
        <div className='course-container'>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg" text="Music 101" author="Michael Jackson"></Courses>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course8-copyright-890x664.jpg" text="Learn Drawing" author="Leonardo Da vinci"></Courses>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course7-copyright-890x664.jpg" text="How to chill" author="Tom Cruise younger brother"></Courses>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course6-copyright-890x664.jpg" text="Math Course" author="Koalsky"></Courses>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course3-copyright-890x664.jpg" text="Photography" author="Mary Hue"></Courses>
            <Courses img="https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course5-copyright-890x664.jpg" text="mobile photography" author="Jhonny Depp"></Courses>
        </div>
    );
};

export default CardContainer;