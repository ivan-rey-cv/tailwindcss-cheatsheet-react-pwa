import React from 'react';

export default ({ header, tableContent }) => {
	const contentList = item => {
		if (Array.isArray(item)) {
			return (
				<span className="flex-grow w-1 flex flex-col text-sm text-purple-darker">
					{item.map(val => <span key={val}>{val}</span>)}
				</span>
			);
		} else if (typeof item === 'object') {
			return Object.entries(item).map(([field, value]) => {
				return (
					<span className="flex-grow w-1">
						<span className="bg-blue-lighter px-2 py-1 font-bold">{field}</span>
						<code className="italic text-sm pl-1">({value})</code>
					</span>
				);
			});
		} else {
			return (
				<span className="flex-grow w-1 text-sm text-purple-darker">{item}</span>
			);
		}
	};

	return (
		<div>
			<ul className="list-reset mt-3">
				<li className="w-full flex h-8 bg-grey-light items-center">
					{header.map(h => (
						<span
							key={h}
							className="w-1 flex-grow pl-3 font-extrabold text-grey-darkest tracking-wide"
						>
							{h}
						</span>
					))}
				</li>
				{tableContent.map(list => (
					<li className="flex py-2 flex items-center border-b border-grey-light">
						{list.map(contentList)}
					</li>
				))}
			</ul>
		</div>
	);
};
