import React, { Component } from 'react';

import MainHeader from './components/MainHeader';
import TheSearch from './components/TheSearch';

export default class App extends Component {
	render() {
		return (
			<main className="bg-grey flex flex-col">
				<MainHeader />
				<TheSearch />
			</main>
		);
	}
}
