import React from 'react';

export default ({ title, event }) => {
	return (
		<div className="w-screen absolute pin-t bg-grey-light flex justify-center">
			<section>
				<button
					className="p-3 bg-grey-darker font-bold text-white"
					onClick={event}
				>
					&arrl;
				</button>
				<div className="pt-1 px-2 pb-2">
					<h2>{title}</h2>
				</div>
			</section>
		</div>
	);
};
