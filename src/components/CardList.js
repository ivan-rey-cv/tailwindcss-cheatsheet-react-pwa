import React from 'react';

import ClassCard from './ClassCard';

import cheatSheet from '../assets/js/cheat-sheet/index';

export default ({ event }) => {
	return (
		<div className="flex-basis-1200 p-4">
			<ul className="Card-list list-reset">
				{cheatSheet.map(v => {
					return (
						<li key={v.title} className={`span-${v.span}`}>
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
