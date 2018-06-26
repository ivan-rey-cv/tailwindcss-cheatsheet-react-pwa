export default {
	title: 'Interactivity',
	color: 'green',
	span: 5,
	children: [
		{
			title: 'cursor',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.cursor-auto', 'cursor: auto;'],
					['.cursor-default', 'cursor: default;'],
					['.cursor-pointer', 'cursor: pointer;'],
					['.cursor-wait', 'cursor: wait;'],
					['.cursor-move', 'cursor: move;'],
					['.cursor-not-allowed', 'cursor: not-allowed;']
				]
			}
		},
		{
			title: 'pointer-events',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.pointer-events-none', 'pointer-events: none;'],
					['.pointer-events-auto', 'pointer-events: auto;']
				]
			}
		},
		{
			title: 'resize',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.resize-none', 'resize: none;'],
					['.resize', 'resize: both;'],
					['.resize-y', 'resize: vertical;'],
					['.resize-x', 'resize: horizontal;']
				]
			}
		},
		{
			title: 'user-select',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.select-none', 'user-select: none;'],
					['.select-text', 'user-select: text;']
				]
			}
		}
	]
};
