import React, { Component } from 'react';

import Topic from './Topic';

class TopicContainer extends Component {
    state = {
        topics: ["Single Link List", "Binary Search Tree", "Graph", "Array", "Hash Table"]
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