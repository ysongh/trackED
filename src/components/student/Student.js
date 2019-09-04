import React, { Component } from 'react';

import defaultUserImage from '../../img/defaultUser.png';
import LineChart from '../common/LineChart';
import Grade from '../grade/Grade';
import TopicList from '../topic/TopicList';
import data from '../data.json';

class Student extends Component{
    render(){
        return (
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-4">
                    <img className="w-8" src={defaultUserImage} alt="User"/>
                    <p>Joe Doe</p>
                    <p>joedoe123stonex@mail.com</p>  
                
                    <center>
                        <LineChart grades={ data.studentData } />
                        <Grade studentId={ data.studentData }/>
                    </center>
                </div>
                <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 bg-gray-700">
                    <TopicList />
                </div>
            </div>
        );
    };
};

export default Student;