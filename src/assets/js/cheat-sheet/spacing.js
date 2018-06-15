export default {
	title: 'Spacing',
	color: 'blue',
	span: 2,
	children: [
		{
			title: 'padding + margin',
			description: ['.{class}{side?}-{size}'],
			table: {
				dimension: 3,
				content: {
					CLASS: {
						padding: 'p',
						margin: 'm',
						'negative-margin': '-m'
					},
					SIDE: {
						default: ' ',
						top: 't',
						right: 'r',
						bottom: 'b',
						left: 'l',
						horizontal: 'x',
						vertical: 'y'
					},
					SIZE: {
						'0': '0',
						'0.25rem': '1',
						'0.50rem': '2',
						'0.75rem': '3',
						'1rem': '4',
						'1.5rem': '6',
						'2rem': '8',
						'1px': 'px',
						'auto(margins only)': 'auto'
					}
				}
			}
		}
	]
};
