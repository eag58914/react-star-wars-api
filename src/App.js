import React, { Component } from 'react';
import './App.css';
import { getAllStarships } from '../src/services/starships';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './pages/StarShipPage';

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
		console.log(starships.results);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">STAR WARS STARSHIPS</header>

					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<section>
									{this.state.starships.map((starship, idx) => (
										<Link to={`/starships/${idx}`} key={starship.name}>
											{starship.name}
										</Link>
									))}{' '}
									}
								</section>
							)}
						/>
						<Route
							path="/starships/:idx"
							render={(props) => (
								<StarshipPage {...this.state.starships} getStarship={this.getStarship} />
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
