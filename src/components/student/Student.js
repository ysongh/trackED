import React, { Component } from 'react';

import defaultUserImage from '../../img/defaultUser.png';

class Student extends Component{
    render(){
        return (
            <div>
                <img src={defaultUserImage} alt="User"/>
                <p>Joe Doe</p>
                <p>joedoe123stonex@mail.com</p>  
            </div>
        );
    };
};

export default Student;