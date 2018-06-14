import React, { Component } from 'react';

import ClassCard from './ClassCard';

import cheatSheet from '../assets/js/cheatSheet';

export default class MainBody extends Component {
	render() {
		return (
			<section className="flex justify-center mt-8">
				<div>
					{cheatSheet.map(v => {
						return (
							<ClassCard
								title={v.title}
								color={v.color}
								children={v.children}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}
