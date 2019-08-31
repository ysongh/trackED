import React, { Component } from 'react';

import defaultUserImage from '../../img/defaultUser.png';
import LineChart from '../common/LineChart';

class Student extends Component{
    render(){
        const gradeList = [{type: 'Math', grade: 88}, {type: 'CS', grade: 94}]
        return (
            <div>
                <img src={defaultUserImage} alt="User"/>
                <p>Joe Doe</p>
                <p>joedoe123stonex@mail.com</p>  
            
            <center>
                <LineChart grades={ gradeList } />
            </center>
            </div>
        );
    };
};

export default Student;