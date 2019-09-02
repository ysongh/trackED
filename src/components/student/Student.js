import React, { Component } from 'react';

import defaultUserImage from '../../img/defaultUser.png';
import LineChart from '../common/LineChart';

class Student extends Component{
    render(){
        const gradeList = [{type: 'Math', grade: 88}, {type: 'CS', grade: 94}]
        return (
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-4">
                    <img className="w-8" src={defaultUserImage} alt="User"/>
                    <p>Joe Doe</p>
                    <p>joedoe123stonex@mail.com</p>  
                
                    <center>
                        <LineChart grades={ gradeList } />
                    </center>
                </div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-600"></div>
            </div>
        );
    };
};

export default Student;