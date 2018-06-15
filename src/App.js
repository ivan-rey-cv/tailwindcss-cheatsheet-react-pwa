import React, { Component } from 'react';

import MainHeader from './components/MainHeader';
import MainBody from './components/MainBody';
import TheSearch from './components/TheSearch';

export default class App extends Component {
	render() {
		return (
			<main className="pb-8">
				<MainHeader />
				<TheSearch />
				<MainBody />
			</main>
		);
	}
}
