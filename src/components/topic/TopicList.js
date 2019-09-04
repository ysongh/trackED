import React, { Component } from 'react';

import Topic from './Topic';

class TopicContainer extends Component {
    state = {
        topics: ["Single Link List", "Graph"]
    };
    
	render() {
		return (
			<Topic topics={this.state.topics} />
		);
	}
}

export default TopicContainer;