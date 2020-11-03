module.exports = {
	purge: {
		enabled: true,
		content: [
			"./public/*.html",
			"./src/**/*.vue",
		]
	},
  darkMode: false,
  theme: {
    extend: {
			screens: {
				'sm': '420px',
			},
			colors: {
				teal: {
					'100': '#E6FFFA',
					'200': '#B2F5EA',
					'300': '#81E6D9',
					'400': '#4FD1C5',
					'500': '#38B2AC',
					'600': '#319795',
					'700': '#2C7A7B',
					'800': '#285E61',
					'900': '#234E52'
				}
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
