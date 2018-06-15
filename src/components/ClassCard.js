import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, color, children }) => {
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
						<li key={val.title}>
							<Link
								className={`list-reset h-8 pl-4 flex items-center cursor-pointer font-semibold text-xs text-${color}-dark border-b border-grey hover:bg-${color}-lighter`}
								to={{
									pathname: '/modal',
									state: {
										content: val
									}
								}}
							>
								{val.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</article>
	);
};
