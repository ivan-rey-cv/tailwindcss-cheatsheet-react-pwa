export default {
	title: 'Flexbox',
	color: 'green',
	span: 9,
	children: [
		{
			title: 'display',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.flex', 'display: flex;'],
					['.inline-flex', 'display: inline-flex;']
				]
			}
		},
		{
			title: 'flex-direction',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.flex-row', 'flex-direction: row;'],
					['.flex-row-reverse', 'flex-direction: row-reverse;'],
					['.flex-col', 'flex-direction: column;'],
					['.flex-col-reverse', 'flex-direction: column-reverse;']
				]
			}
		},
		{
			title: 'flex 	wrapping',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.flex-no-wrap', 'flex-wrap: nowrap;'],
					['.flex-wrap', 'flex-wrap: wrap;'],
					['.flex-wrap-reverse', 'flex-wrap: wrap-reverse;']
				]
			}
		},
		{
			title: 'align-items',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.items-stretch', 'align-items: stretch;'],
					['.items-start', 'align-items: flex-start;'],
					['.items-center', 'align-items: center;'],
					['.items-end', 'align-items: flex-end;'],
					['.items-baseline', 'align-items: baseline;']
				]
			}
		},
		{
			title: 'align-content',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.content-start', 'align-content: flex-start;'],
					['.content-center', 'align-content: center;'],
					['.content-end', 'align-content: flex-end;'],
					['.content-between', 'align-content: space-between;'],
					['.content-around', 'align-content: space-around;']
				]
			}
		},
		{
			title: 'align-self',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.self-auto', 'align-self: auto;'],
					['.self-start', 'align-self: flex-start;'],
					['.self-center', 'align-self: center;'],
					['.self-end', 'align-self: flex-end;'],
					['.self-stretch', 'align-self: stretch;']
				]
			}
		},
		{
			title: 'justify-content',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.justify-start', 'justify-content: flex-start;'],
					['.justify-center', 'justify-content: center;'],
					['.justify-end', 'justify-content: flex-end;'],
					['.justify-between', 'justify-content: space-between;'],
					['.justify-around', 'justify-content: space-around;']
				]
			}
		},
		{
			title: 'flex, grow & shrink',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.flex-initial', 'flex: initial;'],
					['.flex-1', 'flex: 1;'],
					['.flex-auto', 'flex: auto;'],
					['.flex-none', 'flex: none;'],
					['.flex-grow', 'flex-grow: 1;'],
					['.flex-shrink', 'flex-shrink: 1;'],
					['.flex-no-grow', 'flex-grow: 0;'],
					['.flex-no-shrink', 'flex-shrink: 0;']
				]
			}
		}
	]
};
