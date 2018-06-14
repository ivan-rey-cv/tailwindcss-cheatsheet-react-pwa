import React, { Component } from 'react';

export default class TheSearch extends Component {
	render() {
		return (
			<div className="self-center p-2 bg-red-lighter">
				<input
					type="text"
					placeholder="Search"
					className="p-2 rounded-sm pl-4"
				/>
			</div>
		);
	}
}
