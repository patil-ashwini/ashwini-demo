import React, {Component} from 'react';
import {render} from 'react-dom';


export default class Loading extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timer: null,
			counter: 0
		}
	}
	componentDidMount(){
		let timer = setInterval(this.tick, 1000);
		this.setState({timer});
	}
	componentWillUnmount() {
		this.clearInterval(this.state.timer);
	}
	tick() {

		console.log("state", this.state)
		var state = this.state;
		this.setState({
			counter: state.counter + 1
		});
	}
	render() {
		const {time} = this.props;
		return(
			<div>

				{/*Loading{"...".substr(0, this.state.counter % 3 + 1)}*/}
				Loading.. {this.state}
				</div>
			)

	}
}