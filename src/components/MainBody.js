import React, { Component } from 'react';

import CardList from './CardList';
import Modal from './Modal';

export default class MainBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalShown: false,
			modalContent: ''
		};
	}

	showModal = payload => {
		this.setState(prevState => {
			return {
				isModalShown: !prevState.isModalShown,
				modalContent: payload
			};
		});
	};

	hideModal = () => {
		this.setState(prevState => {
			return {
				isModalShown: !prevState.isModalShown,
				modalContent: ''
			};
		});
	};

	render() {
		return (
			<section className="relative flex justify-center pt-4 pb-8">
				<CardList event={this.showModal} />
				{this.state.isModalShown && (
					<Modal content={this.state.modalContent} event={this.hideModal} />
				)}
			</section>
		);
	}
}
