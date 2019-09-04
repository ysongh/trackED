import React from 'react';

const Topic = ({topics}) => {
	
	return (
		<div>
            <h1>Need help?</h1>
            <h2>Pick 3 topics from this unit and your instructor will pair you with a
                mentor:</h2>
            <ul>
                {
                    topics.map((topic, indx) => (
                        <li key={indx}>
                            <input className="topicBtn" type="button" id={topic.id} name={topic.id} value={topic}/>
                        </li>
                    ))
                }
            </ul>
            <br/>
            <input className="btn waves-effect waves-light" id="btnMentor" type="button" value="Find Mentor" />
        </div>
	);
};

export default Topic;