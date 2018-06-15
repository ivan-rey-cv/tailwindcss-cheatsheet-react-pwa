import React from 'react';
import Modal_3d from './Modal_3d';

export default ({ content, event }) => {
	return (
		<div className="fixed min-h-screen w-screen pin-t bg-grey-light flex justify-center z-50">
			<section className="flex-basis-700 flex-shrink">
				<button
					className="py-2 px-4 bg-grey-darker font-bold text-white hover:bg-grey-dark"
					onClick={event}
				>
					X
				</button>
				<div className="mt-2 p-2">
					<h3>{content.title}</h3>
					{content.description && <p className="mt-4">{content.description}</p>}
					{content.table.dimension === 3 && (
						<Modal_3d tableContent={content.table.content} />
					)}
				</div>
			</section>
		</div>
	);
};
