import React from 'react';

export default ({ title, event }) => {
	return (
		<div className="fixed min-h-screen w-screen pin-t bg-grey-light flex justify-center z-50">
			<section className="flex-basis-800">
				<button
					className="py-2 px-4 bg-grey-darker font-bold text-white hover:bg-grey-dark"
					onClick={event}
				>
					X
				</button>
				<div className="mt-2 pl-4 pb-2">
					<h3>{title}</h3>
				</div>
			</section>
		</div>
	);
};
