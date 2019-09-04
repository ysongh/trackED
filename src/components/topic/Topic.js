import React from 'react';

import Button from '../common/Button';

const Topic = ({topics}) => {
	
	return (
		<div>
            <h1 className="font-family-rubik text-4xl text-white leading-loose">Need help?</h1>
            <p className="font-family-rubik text-2xl text-white leading-none mb-8">
                Pick 3 topics from this unit and your instructor will pair you with amentor:
            </p>
            <div className="flex flex-wrap">
                {
                    topics.map((topic, indx) => (
                        <div className="ml-4 mb-3" key={indx}>
                            <Button className="border border-white hover:bg-gray-800 text-white p-2 rounded-full" id={topic.id} name={topic.id} value={topic}/>
                        </div>
                    ))
                }
            </div>
            <br/>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded float-right mb-5" id="btnMentor" value="Find Mentor" />
        </div>
	);
};

export default Topic;