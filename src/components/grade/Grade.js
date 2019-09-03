import React from 'react';

const Grade = (props) => {
    const classAverage = 90;
    const studentAverage = 92;
    const finalGrade = 87;

	return (
        <div className="flex flex-wrap">
            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
                <span className="font-family-rubik font-bold text-4xl leading-relaxed text-teal-800"> {classAverage.toFixed(2)|| '-'}</span>
                <br/>
                <span className="font-family-rubik text-sm leading-tightd text-teal-800">Avg Class Grade</span>
            </div>

            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
                <span className="font-family-rubik font-bold text-4xl leading-relaxed text-teal-800" >{studentAverage.toFixed(2)|| '-'}</span>
                <br/>
                <span className="font-family-rubik text-sm leading-tightd text-teal-800" >Avg Grade </span>
            </div>

            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
                {finalGrade?
                    <span className="font-family-rubik font-bold text-4xl leading-relaxed text-teal-800" >{finalGrade.toFixed(2) }</span>
                    : null
                }
                <br/>
                <span className="font-family-rubik text-sm leading-tightd text-teal-800" >Final Grade </span>
            </div>
        </div>
	);
};

export default Grade;