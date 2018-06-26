export default {
	title: 'Borders',
	color: 'orange',
	span: 5,
	children: [
		{
			title: 'border-color',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.border-transparent', 'background-color: transparent;'],
					['.border-black', 'background-color: #22292f;'],
					['.border-grey-darkest', 'background-color: #3d4852;'],
					['.border-grey-darker', 'background-color: #606f7b;'],
					['.border-grey-dark', 'background-color: #8795a1;'],
					['.border-grey', 'background-color: #b8c2cc;'],
					['.border-grey-light', 'background-color: #dae1e7;'],
					['.border-grey-lighter', 'background-color: #f1f5f8;'],
					['.border-grey-lightest', 'background-color: #f8fafc;'],
					['.border-white', 'background-color: #ffffff;'],
					['.border-red-darkest', 'background-color: #3b0d0c;'],
					['.border-red-darker', 'background-color: #621b18;'],
					['.border-red-dark', 'background-color: #cc1f1a;'],
					['.border-red', 'background-color: #e3342f;'],
					['.border-red-light', 'background-color: #ef5753;'],
					['.border-red-lighter', 'background-color: #f9acaa;'],
					['.border-red-lightest', 'background-color: #fcebea;'],
					['.border-orange-darkest', 'background-color: #462a16;'],
					['.border-orange-darker', 'background-color: #613b1f;'],
					['.border-orange-dark', 'background-color: #de751f;'],
					['.border-orange', 'background-color: #f6993f;'],
					['.border-orange-light', 'background-color: #faad63;'],
					['.border-orange-lighter', 'background-color: #fcd9b6;'],
					['.border-orange-lightest', 'background-color: #fff5eb;'],
					['.border-yellow-darkest', 'background-color: #453411;'],
					['.border-yellow-darker', 'background-color: #684f1d;'],
					['.border-yellow-dark', 'background-color: #f2d024;'],
					['.border-yellow', 'background-color: #ffed4a;'],
					['.border-yellow-light', 'background-color: #fff382;'],
					['.border-yellow-lighter', 'background-color: #fff9c2;'],
					['.border-yellow-lightest', 'background-color: #fcfbeb;'],
					['.border-green-darkest', 'background-color: #0f2f21;'],
					['.border-green-darker', 'background-color: #1a4731;'],
					['.border-green-dark', 'background-color: #1f9d55;'],
					['.border-green', 'background-color: #38c172;'],
					['.border-green-light', 'background-color: #51d88a;'],
					['.border-green-lighter', 'background-color: #a2f5bf;'],
					['.border-green-lightest', 'background-color: #e3fcec;'],
					['.border-teal-darkest', 'background-color: #0d3331;'],
					['.border-teal-darker', 'background-color: #20504f;'],
					['.border-teal-dark', 'background-color: #38a89d;'],
					['.border-teal', 'background-color: #4dc0b5;'],
					['.border-teal-light', 'background-color: #64d5ca;'],
					['.border-teal-lighter', 'background-color: #a0f0ed;'],
					['.border-teal-lightest', 'background-color: #e8fffe;'],
					['.border-blue-darkest', 'background-color: #12283a;'],
					['.border-blue-darker', 'background-color: #1c3d5a;'],
					['.border-blue-dark', 'background-color: #2779bd;'],
					['.border-blue', 'background-color: #3490dc;'],
					['.border-blue-light', 'background-color: #6cb2eb;'],
					['.border-blue-lighter', 'background-color: #bcdefa;'],
					['.border-blue-lightest', 'background-color: #eff8ff;'],
					['.border-indigo-darkest', 'background-color: #191e38;'],
					['.border-indigo-darker', 'background-color: #2f365f;'],
					['.border-indigo-dark', 'background-color: #5661b3;'],
					['.border-indigo', 'background-color: #6574cd;'],
					['.border-indigo-light', 'background-color: #7886d7;'],
					['.border-indigo-lighter', 'background-color: #b2b7ff;'],
					['.border-indigo-lightest', 'background-color: #e6e8ff;'],
					['.border-purple-darkest', 'background-color: #21183c;'],
					['.border-purple-darker', 'background-color: #382b5f;'],
					['.border-purple-dark', 'background-color: #794acf;'],
					['.border-purple', 'background-color: #9561e2;'],
					['.border-purple-light', 'background-color: #a779e9;'],
					['.border-purple-lighter', 'background-color: #d6bbfc;'],
					['.border-purple-lightest', 'background-color: #f3ebff;'],
					['.border-pink-darkest', 'background-color: #451225;'],
					['.border-pink-darker', 'background-color: #6f213f;'],
					['.border-pink-dark', 'background-color: #eb5286;'],
					['.border-pink', 'background-color: #f66d9b;'],
					['.border-pink-light', 'background-color: #fa7ea8;'],
					['.border-pink-lighter', 'background-color: #ffbbca;'],
					['.border-pink-lightest', 'background-color: #ffebef;']
				]
			}
		},
		{
			title: 'border-radius',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.rounded-none', 'border-radius: 0;'],
					['.rounded-sm', 'border-radius: .125rem;'],
					['.rounded', 'border-radius: .25rem;'],
					['.rounded-lg', 'border-radius: .5rem;'],
					['.rounded-full', 'border-radius: 9999px;'],
					[
						'.rounded-t-none',
						['border-top-left-radius: 0;', 'border-top-right-radius: 0;']
					],
					[
						'.rounded-r-none',
						['border-top-right-radius: 0;', 'border-bottom-right-radius: 0;']
					],
					[
						'.rounded-b-none',
						['border-bottom-right-radius: 0;', 'border-bottom-left-radius: 0;']
					],
					[
						'.rounded-l-none',
						['border-top-left-radius: 0;', 'border-bottom-left-radius: 0;']
					],
					[
						'.rounded-t-sm',
						[
							'border-top-left-radius: .125rem;',
							'border-top-right-radius: .125rem;'
						]
					],
					[
						'.rounded-r-sm',
						[
							'border-top-right-radius: .125rem;',
							'border-bottom-right-radius: .125rem;'
						]
					],
					[
						'.rounded-b-sm',
						[
							'border-bottom-right-radius: .125rem;',
							'border-bottom-left-radius: .125rem;'
						]
					],
					[
						'.rounded-l-sm',
						[
							'border-top-left-radius: .125rem;',
							'border-bottom-left-radius: .125rem;'
						]
					],
					[
						'.rounded-t',
						[
							'border-top-left-radius: .25rem;',
							'border-top-right-radius: .25rem;'
						]
					],
					[
						'.rounded-r',
						[
							'border-top-right-radius: .25rem;',
							'border-bottom-right-radius: .25rem;'
						]
					],
					[
						'.rounded-b',
						[
							'border-bottom-right-radius: .25rem;',
							'border-bottom-left-radius: .25rem;'
						]
					],
					[
						'.rounded-l',
						[
							'border-top-left-radius: .25rem;',
							'border-bottom-left-radius: .25rem;'
						]
					],
					[
						'.rounded-t-lg',
						[
							'border-top-left-radius: .5rem;',
							'border-top-right-radius: .5rem;'
						]
					],
					[
						'.rounded-r-lg',
						[
							'border-top-right-radius: .5rem;',
							'border-bottom-right-radius: .5rem;'
						]
					],
					[
						'.rounded-b-lg',
						[
							'border-bottom-right-radius: .5rem;',
							'border-bottom-left-radius: .5rem;'
						]
					],
					[
						'.rounded-l-lg',
						[
							'border-top-left-radius: .5rem;',
							'border-bottom-left-radius: .5rem;'
						]
					],
					[
						'.rounded-t-full',
						[
							'border-top-left-radius: 9999px;',
							'border-top-right-radius: 9999px;'
						]
					],
					[
						'.rounded-r-full',
						[
							'border-top-right-radius: 9999px;',
							'border-bottom-right-radius: 9999px;'
						]
					],
					[
						'.rounded-b-full',
						[
							'border-bottom-right-radius: 9999px;',
							'border-bottom-left-radius: 9999px;'
						]
					],
					[
						'.rounded-l-full',
						[
							'border-top-left-radius: 9999px;',
							'border-bottom-left-radius: 9999px;'
						]
					],
					['.rounded-tl-none', 'border-top-left-radius: 0;'],
					['.rounded-tr-none', 'border-top-right-radius: 0;'],
					['.rounded-br-none', 'border-bottom-right-radius: 0;'],
					['.rounded-bl-none', 'border-bottom-left-radius: 0;'],
					['.rounded-tl-sm', 'border-top-left-radius: .125rem;'],
					['.rounded-tr-sm', 'border-top-right-radius: .125rem;'],
					['.rounded-br-sm', 'border-bottom-right-radius: .125rem;'],
					['.rounded-bl-sm', 'border-bottom-left-radius: .125rem;'],
					['.rounded-tl', 'border-top-left-radius: .25rem;'],
					['.rounded-tr', 'border-top-right-radius: .25rem;'],
					['.rounded-br', 'border-bottom-right-radius: .25rem;'],
					['.rounded-bl', 'border-bottom-left-radius: .25rem;'],
					['.rounded-tl-lg', 'border-top-left-radius: .5rem;'],
					['.rounded-tr-lg', 'border-top-right-radius: .5rem;'],
					['.rounded-br-lg', 'border-bottom-right-radius: .5rem;'],
					['.rounded-bl-lg', 'border-bottom-left-radius: .5rem;'],
					['.rounded-tl-full', 'border-top-left-radius: 9999px;'],
					['.rounded-tr-full', 'border-top-right-radius: 9999px;'],
					['.rounded-br-full', 'border-bottom-right-radius: 9999px;'],
					['.rounded-bl-full', 'border-bottom-left-radius: 9999px;']
				]
			}
		},
		{
			title: 'border-style',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.border-solid', 'border-style: solid;'],
					['.border-dashed', 'border-style: dashed;'],
					['.border-dotted', 'border-style: dotted;'],
					['.border-none', 'border-style: none;']
				]
			}
		},
		{
			title: 'border-width',
			description: [
				'.border{-side?}{-width?}',
				'eg. .border-b-4  is border-bottom: 4px'
			],
			table: {
				header: ['Class', 'Side(optional)', 'Width(optional)'],
				content: [
					['.border', { ' ': 'All - default' }, { '0': '0px' }],
					['', { t: 'Top' }, { ' ': '1px(default)' }],
					['', { l: 'Left' }, { '2': '2px' }],
					['', { b: 'Bottom' }, { '4': '4px' }],
					['', '', { '8': '8px' }]
				]
			}
		}
	]
};
