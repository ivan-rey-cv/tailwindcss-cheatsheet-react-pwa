export default {
	title: 'Miscellaneous',
	color: 'pink',
	span: 4,
	children: [
		{
			title: 'appearance'
		},
		{
			title: 'box-shadow',
			table: {
				header: ['class', 'property'],
				content: [
					['.shadow', 'box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);'],
					[
						'.shadow-md',
						'box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);'
					],
					[
						'.shadow-lg',
						'box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);'
					],
					['.shadow-inner', 'box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);'],
					['.shadow-none', 'box-shadow: none;']
				]
			}
		},
		{
			title: 'opacity'
		},
		{
			title: 'svg'
		}
	]
};
