import React, { Component } from 'react';
import nodesObject from '../assets/js/nodesObject';

export default class TheSearch extends Component {
	state = {
		searchValue: ''
	};

	onChange = e => {
		const inputVal = e.currentTarget.value;
		this.searchAndReplaceFromNodes(inputVal);
		this.setState({
			searchValue: inputVal
		});
	};

	searchAndReplaceFromNodes = searchVal => {
		const nodeEntries = Object.entries(nodesObject);
		nodeEntries.map(entry => {
			const parent = document.getElementById(entry[0]);

			const totalMatches = entry[1].reduce((accum, string) => {
				const node = document.getElementById(string);
				const regex = new RegExp(searchVal, 'gi');
				const match = string.match(regex);

				node.innerHTML = string;
				node.parentNode.classList.remove('order-first');

				if (match != null) {
					const hasMatchString = match[0] !== '';

					if (hasMatchString) {
						node.parentNode.classList.add('order-first');
						const innerHtml = string.replace(
							searchVal,
							`<span class="search-highlight">${searchVal}</span>`
						);
						node.innerHTML = innerHtml;
					}

					return accum + 1;
				} else {
					return accum;
				}
			}, 0);

			return totalMatches > 0
				? parent.classList.add('order-first')
				: parent.classList.remove('order-first');
		});
	};

	resetSearchHighlight = () => {
		const nodeEntries = Object.entries(nodesObject);
		return nodeEntries.map(entry => {
			const parent = document.getElementById(entry[0]);
			parent.classList.remove('order-first');
			return entry[1].map(string => {
				const node = document.getElementById(string);
				node.classList.remove('order-first');
				return (node.innerHTML = string);
			});
		});
	};

	resetSearchValue = () => {
		this.resetSearchHighlight();
		this.setState(prevState => {
			return {
				searchValue: ''
			};
		});
	};

	render() {
		return (
			<div className="self-center p-2 pl-4">
				<div className="relative w-64">
					<label htmlFor="search">
						<input
							type="text"
							id="search"
							name="search-tailwind-css"
							aria-label="search-tailwind-css"
							aria-labelledby="search-tailwind-css"
							placeholder="Search"
							className="p-2 rounded-sm pl-4 pr-8 text-blue-dark tracking-wide shadow-md w-64"
							onChange={this.onChange}
							value={this.state.searchValue}
						/>
					</label>
					{this.state.searchValue !== '' && (
						<span
							className="absolute pin-t pin-r h-full px-2 rounded-full text-2xl font-black cursor-pointer text-red-dark flex items-center justify-center"
							onClick={this.resetSearchValue}
						>
							&times;
						</span>
					)}
				</div>
			</div>
		);
	}
}
