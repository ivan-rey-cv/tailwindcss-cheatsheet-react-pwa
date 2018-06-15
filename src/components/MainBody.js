import React, { Component } from 'react';

import CardList from './CardList';

export default class MainBody extends Component {
	render() {
		return (
			<section className="relative flex justify-center pt-4 pb-8">
				<CardList />
			</section>
		);
	}
}
