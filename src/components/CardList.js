import React from 'react';

import ClassCard from './ClassCard';

import cheatSheet from '../assets/js/cheatSheet';

export default ({ event }) => {
	return (
		<div className="Card-list">
			<ul className="list-reset">
				{cheatSheet.map(v => {
					return (
						<li>
							<ClassCard
								title={v.title}
								color={v.color}
								children={v.children}
								event={event}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
