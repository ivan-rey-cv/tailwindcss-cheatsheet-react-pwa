import React, { Component } from 'react';

export default class MainHeader extends Component {
	render() {
		return (
			<header className="flex items-center p-2 bg-teal-light sticky pin-t z-10">
				<h2 className="text-purple-darker">TailWindCSS</h2>
				<span className="ml-4 font-bold text-grey-darker text-sm">
					CHEAT SHEET
				</span>
			</header>
		);
	}
}
