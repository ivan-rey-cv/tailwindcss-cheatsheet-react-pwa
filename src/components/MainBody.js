import React, { Component } from 'react';

import CardList from './CardList';
import Modal from './Modal';

export default class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalToggledOn: false,
			modal: ''
		};
	}

	toggleModalOn = payload => {
		this.setState(prevState => {
			return {
				isModalToggledOn: !prevState.isModalToggledOn,
				modal: payload
			};
		});
	};

	toggleModalOff = () => {
		this.setState(prevState => {
			return {
				isModalToggledOn: !prevState.isModalToggledOn,
				modal: ''
			};
		});
	};

	render() {
		return (
			<section className="relative flex justify-center pt-8 w-screen">
				<CardList event={this.toggleModalOn} />
				{this.state.isModalToggledOn && (
					<Modal title={this.state.modal.title} event={this.toggleModalOff} />
				)}
			</section>
		);
	}
}
