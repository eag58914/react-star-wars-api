import React, { Component } from 'react';
import './App.css';
import { getAllStarships } from '../src/services/starships';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	state = {
		starships: []
	};

	getStarship = (idx) => {
		return this.state.starships[idx];
	};

	async componentDidMount() {
		const starships = await getAllStarships();
		this.setState({ starships: starships.results });
	}

	render() {
		return (
			<div className="App">
				<section>{this.state.starships.map((starship) => {})}</section>
			</div>
		);
	}
}

export default App;
