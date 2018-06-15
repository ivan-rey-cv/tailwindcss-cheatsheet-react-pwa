import React from 'react';

export default ({ tableContent }) => {
	return (
		<div className="mt-4 flex justify-between">
			{Object.entries(tableContent).map(list => {
				return (
					<div className="flex flex-col">
						<span className="font-extrabold text-sm pb-2">{list[0]}</span>
						{Object.entries(list[1]).map(entry => {
							return (
								<span className="text-xs flex items-center">
									<span className="h-8 w-8 bg-white border border-grey flex justify-center items-center font-bold">
										{entry[1]}
									</span>
									<span className="pl-2 font-bold text-xs text-grey-darker">
										{entry[0]}
									</span>
								</span>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
