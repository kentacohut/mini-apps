import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row.jsx';
import ScoreBoad from './scoreboard.jsx'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pins: [
			[1,1,1,1],
			[1,1,1],
			[1,1],
			[1]
			]
		}
	}

	render() {
		return (
			<div>
			<div id="lane">
			{this.state.pins.map((row, index)=><Row key={index} rowId={index} pins={this.state.pins[index]}/>)}
			</div>
			<ScoreBoad />
			</div>
			)
	}
}

export default App;