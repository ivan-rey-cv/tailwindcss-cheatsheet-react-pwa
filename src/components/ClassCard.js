import React from 'react';

export default ({ title, color, children }) => {
	return (
		<article
			className={`border-t-4 border-${color} w-64 bg-white rounded-sm shadow-lg`}
		>
			<h3
				className={`py-3 flex justify-center items-center border-b border-grey text-${color}-darkest`}
			>
				{title}
			</h3>
			<ul className="list-reset">
				{children.map(val => {
					return (
						<li
							className={`h-8 pl-4 flex items-center cursor-pointer font-semibold text-sm text-blue-dark border-b border-grey hover:bg-${color}-lighter`}
							//onClick={}
						>
							{val.title}
						</li>
					);
				})}
			</ul>
		</article>
	);
};
