import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: props.initialCount,
		};
	}
	render() {
		console.log('Render Counter');
		return (
			<ThemeContext.Consumer>
				{(style) => (
					<div>
						<button style={style} onClick={() => this.changeCount(-1)}>-</button>
						<span>{this.state.count}</span>
						<button style={style} onClick={() => this.changeCount(1)}>+</button>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
	//Code commented out is not correct as if I ran the function twice in script it would only change by one
	// changeCount(increment) {
	// 	return this.setState({ count: this.state.count + increment });
	// }
	changeCount(increment) {
		this.setState((prevState) => {
			return { count: prevState.count + increment };
		});
	}
}
