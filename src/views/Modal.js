import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ModalTable3d from '../components/Modal_3d';
import ModalTable2d from '../components/Modal_2d';

export default class Modal extends Component {
	render() {
		const content = this.props.location.state.content;
		console.log(content);
		return (
			<div className="flex justify-center bg-indigo-lightest min-h-screen">
				<section className="flex-basis-700 flex-shrink">
					<Link to={'/'}>
						<button className="py-2 px-4 bg-grey-darker  text-2xl font-black text-white hover:bg-grey-dark">
							&times;
						</button>
					</Link>
					<div className="mt-2 p-2">
						<h3 className="text-grey-darkest font-bold flex justify-center">
							{content.title}
						</h3>
						{content.description && (
							<span className="py-4 font-semibold text-purple-darker text-sm flex flex-col tracking-wider">
								{content.description.map((desc, index) => (
									<p className="mt-2" key={index}>
										{desc}
									</p>
								))}
							</span>
						)}
						{content.table.dimension === 2 && (
							<ModalTable2d tableContent={content.table.content} />
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
