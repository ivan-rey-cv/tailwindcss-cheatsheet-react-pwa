import React from 'react';

import MainHeader from '../components/MainHeader';
import MainBody from '../components/MainBody';
import TheSearch from '../components/TheSearch';

export default () => {
	return (
		<main className="pb-8">
			<MainHeader />
			<TheSearch />
			<MainBody />
		</main>
	);
};
