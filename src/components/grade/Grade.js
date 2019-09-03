import React, {PropTypes} from 'react';

const Grade = (props) => {
    const classAverage = 90;
    const studentAverage = 92;
    const finalGrade = 87;

	return (
        <div className="row">
            <div className="col s4" >
                <span style={gradeStyles} > {classAverage.toFixed(2)|| '-'}</span>
                <br/>
                <span style={Gradelabel} >Avg Class Grade</span>
            </div>
            <div className="col s4" >
                <span style={gradeStyles} >{studentAverage.toFixed(2)|| '-'}</span>
                <br/>
                <span style={Gradelabel} >Avg Grade </span>
            </div>
            <div className="col s4" >

                {finalGrade?
                    <span style={gradeStyles} >{finalGrade.toFixed(2) }</span>
                    : null
                }
                <br/>
                <span style={Gradelabel} >Final Grade </span>
            </div>
        </div>
	);
};

let gradeStyles = {
	width: "93px",
	height: "57px",
	fontFamily: "Rubik",
	fontSize: "40px",
	fontWeight: "bold",
	lineHeight: "57px",
	color: "#545F7A"
};

let Gradelabel = {
	width: "80px",
	height: "19px",
	fontFamily: "Rubik",
	fontSize: "14px",
	lineHeight: "19px",
	color: "#545F7A"
};

export default Grade;
