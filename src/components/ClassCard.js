import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, color, children }) => {
	return (
		<article
			className={`border-t-4 border-${color} w-72 bg-grey-light shadow-lg`}
		>
			<h3
				className={`h-10 flex justify-center items-center border-b border-grey text-grey-darker font-extrabold tracking-wide`}
			>
				{title}
			</h3>
			<ul className="list-reset flex flex-col">
				{children.map(val => {
					return (
						<li key={val.title} className="">
							<Link
								id={val.title}
								className={`list-reset h-10 pl-4 flex items-center cursor-pointer font-semibold text-sm text-${color}-dark border-b border-grey hover:bg-${color}-lighter`}
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
