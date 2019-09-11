import React, { Component } from 'react';

import Topic from './Topic';

class TopicContainer extends Component {
    state = {
        topics: [
			{name: "Single Link List", isSelect: true},
			{name: "Binary Search Tree", isSelect: false},
			{name: "Graph", isSelect: false},
			{name: "Array", isSelect: false},
			{name: "Hash Table", isSelect: false}
		]
    };
    
	render() {
		return (
			<div className="p-6">
				<Topic topics={this.state.topics} />
			</div>
		);
	}
}

export default TopicContainer;