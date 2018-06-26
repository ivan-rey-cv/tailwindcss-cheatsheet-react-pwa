export default {
	title: 'Layout',
	color: 'teal',
	span: 8,
	children: [
		{
			title: 'break-points'
		},
		{
			title: 'container',
			table: {
				header: ['Class', 'Breakpoint', 'Properties'],
				content: [
					['.container', { '': 'None' }, 'width: 100%'],
					['', { sm: '576px' }, 'max-width: 576px'],
					['', { md: '768px' }, 'max-width: 768px'],
					['', { lg: '992px' }, 'max-width: 992px'],
					['', { xl: '1200px' }, 'max-width: 1200px']
				]
			}
		},
		{
			title: 'display'
		},
		{
			title: 'float'
		},
		{
			title: 'overflow'
		},
		{
			title: 'position',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.static', 'position: static;'],
					['.fixed', 'position: fixed;'],
					['.absolute', 'position: absolute;'],
					['.relative', 'position: relative;'],
					['.sticky', 'position: sticky;'],
					['pin-t', 'top: 0;'],
					['pin-r', 'right: 0;'],
					['pin-b', 'bottom: 0;'],
					['pin-l', 'left: 0;'],
					['pin-y', ['top: 0;', 'bottom: 0;']],
					['pin-x', ['right: 0;', 'left: 0;']],
					['.pin', ['top: 0;', 'right: 0;', 'bottom: 0;', 'left: 0;']],
					[
						'.pin-none',
						['top: auto;', 'bottom: auto;', 'right: auto;', 'left: auto;']
					]
				]
			}
		},
		{
			title: 'visibility'
		},
		{
			title: 'z-index'
		}
	]
};
