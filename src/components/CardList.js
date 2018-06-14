import React from 'react';

import ClassCard from './ClassCard';

import cheatSheet from '../assets/js/cheatSheet';

export default () => {
	return (
		<div>
			<ul className="list-reset">
				{cheatSheet.map(v => {
					return (
						<li>
							<ClassCard
								title={v.title}
								color={v.color}
								children={v.children}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
