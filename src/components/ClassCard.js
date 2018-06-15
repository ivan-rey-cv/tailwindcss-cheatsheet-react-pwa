import React from 'react';

export default ({ title, color, children, event }) => {
	return (
		<article className={`border-t-4 border-${color} w-64 bg-white shadow-lg`}>
			<h4
				className={`py-2 flex justify-center items-center border-b border-grey text-grey-darker font-extrabold tracking-wide`}
			>
				{title}
			</h4>
			<ul className="list-reset">
				{children.map(val => {
					return (
						<li
							className={`h-8 pl-4 flex items-center cursor-pointer font-semibold text-sm text-${color}-dark border-b border-grey hover:bg-${color}-lighter`}
							onClick={() => event(val)}
						>
							{val.title}
						</li>
					);
				})}
			</ul>
		</article>
	);
};
