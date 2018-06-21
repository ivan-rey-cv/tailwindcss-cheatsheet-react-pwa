import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ModalTable from '../components/ModalTable';

export default class Modal extends Component {
	render() {
		const content = this.props.location.state.content;
		return (
			<div className="flex justify-center bg-white min-h-screen">
				<section className="flex-basis-700 flex-shrink pb-4">
					<Link to={'/'}>
						<button className="py-2 px-4 bg-grey-darker  text-2xl font-black text-white hover:bg-grey-dark">
							&times;
						</button>
					</Link>
					<div className="mt-2 p-2">
						<h3 className="text-purple-dark text-xl tracking-wider font-extrabold flex justify-center">
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
						<ModalTable
							header={content.table.header}
							tableContent={content.table.content}
						/>
					</div>
				</section>
			</div>
		);
	}
}
