import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ModalTable3d from '../components/Modal_3d';

export default class Modal extends Component {
	render() {
		const content = this.props.location.state.content;
		console.log(content);
		return (
			<div className="flex justify-center bg-grey-light min-h-screen">
				<section className="flex-basis-700 flex-shrink">
					<Link to={'/'}>
						<button className="py-2 px-4 bg-grey-darker font-bold text-white hover:bg-grey-dark">
							X
						</button>
					</Link>
					<div className="mt-2 p-2">
						<h3>{content.title}</h3>
						{content.description && (
							<p className="mt-4 font-semibold text-purple text-xs">
								{content.description}
							</p>
						)}
						{content.table.dimension === 3 && (
							<ModalTable3d tableContent={content.table.content} />
						)}
					</div>
				</section>
			</div>
		);
	}
}