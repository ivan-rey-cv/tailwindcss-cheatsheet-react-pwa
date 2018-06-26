export default {
	title: 'Layout',
	color: 'teal',
	span: 8,
	children: [
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
			title: 'display',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.block', 'display: block;'],
					['.inline-block', 'display: inline-block;'],
					['.inline', 'display: inline;'],
					['.table', 'display: table;'],
					['.table-row', 'display: table-row;'],
					['.table-cell', 'display: table-cell;'],
					['.hidden', 'display: none;'],
					['.flex', 'display: flex;'],
					['.inline-flex', 'display: inline-flex;']
				]
			}
		},
		{
			title: 'float',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.float-right', 'float: right;'],
					['.float-left', 'float: left;'],
					['.float-none', 'float: none;'],
					[
						'.clearfix',
						[
							'&::after {',
							'	 content: "";',
							'	 display: table;',
							'	 clear: both;',
							'}'
						]
					]
				]
			}
		},
		{
			title: 'overflow',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.overflow-auto', 'overflow: auto;'],
					['.overflow-hidden', 'overflow: hidden;'],
					['.overflow-visible', 'overflow: visible;'],
					['.overflow-scroll', 'overflow: scroll;'],
					['.overflow-x-auto', 'overflow-x: auto;'],
					['.overflow-y-auto', 'overflow-y: auto;'],
					['.overflow-x-scroll', 'overflow-x: scroll;'],
					['.overflow-y-scroll', 'overflow-y: scroll;'],
					['.scrolling-touch', '-webkit-overflow-scrolling: touch;'],
					['.scrolling-auto', '-webkit-overflow-scrolling: auto;']
				]
			}
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
			title: 'visibility',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.visible', 'visibility: visible;'],
					['.invisible', 'visibility: hidden;']
				]
			}
		},
		{
			title: 'z-index',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.z-0', 'z-index: 0;'],
					['.z-10', 'z-index: 10;'],
					['.z-20', 'z-index: 20;'],
					['.z-30', 'z-index: 30;'],
					['.z-40', 'z-index: 40;'],
					['.z-50', 'z-index: 50;'],
					['.z-auto', 'z-index: auto;']
				]
			}
		}
	]
};
