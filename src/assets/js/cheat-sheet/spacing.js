export default {
	title: 'Spacing',
	color: 'blue',
	span: 2,
	children: [
		{
			title: 'padding + margin',
			description: [
				'.{class}{side?} - {size}',
				' eg.  .pt-4 (padding-top: 1rem)'
			],
			table: {
				header: ['class', 'side', 'size'],
				content: [
					[{ p: 'padding' }, { ' ': 'default' }, { '0': '0' }],
					[{ m: 'margin' }, { t: 'top' }, { '1': '0.25rem' }],
					[{ '-m': 'negative-margin' }, { r: 'right' }, { '2': '0.50rem' }],
					['', { b: 'bottom' }, { '3': '0.75rem' }],
					['', { l: 'left' }, { '4': '1rem' }],
					['', { x: 'horizontal' }, { '6': '1.50rem' }],
					['', { y: 'vertical' }, { '8': '2rem' }],
					['', '', { px: '1px' }],
					['', '', { auto: 'auto - margins-only' }]
				]
			}
		}
	]
};
