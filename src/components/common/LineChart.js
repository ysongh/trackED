import React from 'react';
import { VictoryBar ,VictoryLine, VictoryChart,VictoryTooltip} from 'victory';

const LineChart = props => {
		return (
			<div>
				<div className="chart" style={{width:"80%"}}>
				<VictoryChart
					domainPadding={30}
				>
					{props.chartType === "LINE" ?
						<VictoryLine
							labelComponent={<VictoryTooltip/>}
							data={
								props.grades.map((grades,index) => ({type: grades.type, grade: grades.grade}))
							}
							domain={{y: [0, 100]}}
							x="type"
							y="grade"
							style={{
								labels: {fontSize: 12},
								parent: {border: "4px solid #ccc"},
								width: "60%"
							}}
						/>
						:
						<VictoryBar
							data={
								props.grades.map(grades => ({type: grades.type, grade: grades.grade}))
							}
							domain={{y: [0, 100]}}
							x="type"
							y="grade"
							style={{
								data: {fill: (d) => d.y > 60 ? "#1ABC9C" : "#DD1379"},
								labels: {fontSize: 12},
								parent: {border: "4px solid #ccc"},
								width: "60%"
							}}
						/>
					}
				</VictoryChart>
			    </div>
			</div>
		);
	};

export default LineChart;