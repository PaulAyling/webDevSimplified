import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.initialCount,
		};
	}
	render() {
    console.log('Render Counter')
		return (
			<div>
				<button onClick={() => this.changeCount(-1)}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.changeCount(1)}>+</button>
			</div>
		);
  }
  //Code commented out is not correct as if I ran the function twice in script it would only change by one
	// changeCount(increment) {
	// 	return this.setState({ count: this.state.count + increment });
	// }
	changeCount(increment) {
		this.setState(prevState => {
      return {count: prevState.count + increment}
    })
}
}
