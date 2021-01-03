module.exports= {
	theme: {
		extend: {
			colors: {
				gray: {
					'100': '#e5e5e5',
					'200': '#cccccc',
					'300': '#b3b3b3',
					'400': '#999999',
					'500': '#808080',
					'600': '#666666',
					'700': '#4d4d4d',
					'800': '#333333',
					'900': '#1a1a1a'
				}
			},
			scale: {
				'200': '2'
			},
			transitionTimingFunction: {
				'out-back': 'cubic-bezier(1, .9, .95, 1.25)',
				'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)'
			},
			transitionDuration: {
				'250': '250ms',
				'1500': '1500ms'
			},
			transitionDelay: {
				'2000': '2000ms'
			}
		}
	}
}