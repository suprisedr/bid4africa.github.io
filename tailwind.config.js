/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./*.html', './assets/js/**/*.js'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1320px',
			},
		},
		fontFamily: {
			sans: ['"Inter", sans-serif'],
		},
		fontSize: {
			sm: '0.75rem',
			base: '0.875rem',
			md: '1.125rem',
			lg: '1.5rem',
			xl: '1.75rem',
			'2xl': '2rem',
			'3xl': '2.5rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},

		extend: {
			flex: {
				0: '0 0 auto',
			},

			colors: {
				white: '#ffffff',
				gray: {
					300: '#C2BFBD', // Light gray from branding
					500: '#878889', // Medium gray from branding
					700: '#3D3B3B', // Dark gray from branding
					800: '#353434', // Very dark gray from branding
				},
				orange: {
					300: '#FE9900', // Lighter orange for focus rings
					500: '#FE9900', // Orange from branding
					600: '#E6890A', // Darker orange for hover states
				},
			},
			maxWidth: {
				'screen-xs': '300px',
			},
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
		}),
		require('@tailwindcss/typography'),
	],
};