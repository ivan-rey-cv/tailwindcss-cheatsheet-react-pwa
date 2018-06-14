import React, { Component } from 'react';

import CardList from './CardList';

export default class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalToggledOn: false
		};
	}

	render() {
		return (
			<section className="flex justify-center mt-8">
				<CardList />
			</section>
		);
	}
}
