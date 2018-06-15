import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import Modal from './views/Modal';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route path={'/'} exact component={Home} />
					<Route path={'/modal'} component={Modal} />
				</React.Fragment>
			</BrowserRouter>
		);
	}
}
