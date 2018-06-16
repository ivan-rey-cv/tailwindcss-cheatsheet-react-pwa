import React from 'react';

export default ({ tableContent }) => {
	return (
		<div className="flex justify-center">
			<div className="flex-basis-500 flex flex-col mt-4">
				<span className="flex font-bold text-sm text-grey-darkest pb-2">
					<span className="w-2/5">class</span>
					<span className="w-3/5">property</span>
				</span>
				{tableContent.map((content, index) => {
					return (
						<span
							key={index}
							className="flex font-semibold text-xs text-purple-dark p-2 tracking-wider border-b border-grey-light"
						>
							<span className="w-2/5">{content[0]}</span>
							<span className="w-3/5">{content[1]}</span>
						</span>
					);
				})}
			</div>
		</div>
	);
};
