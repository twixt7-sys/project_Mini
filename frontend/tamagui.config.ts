import { createTamagui } from 'tamagui'
import { config as defaultConfig } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui({
	...defaultConfig,

	// You can override or extend themes, tokens, fonts, etc. here.
	themeClassNameOnRoot: false,

	// Optional: add your own custom tokens
	tokens: {
		// This extends default tokens
		...defaultConfig.tokens,

		// Example: custom spacing tokens
		space: {
			...defaultConfig.tokens.space,
			xs: 4,
			sm: 8,
			md: 16,
			lg: 24,
			xl: 32,
		},
	},

	// Optional: custom fonts
	fonts: {
		...defaultConfig.fonts,
		body: {
			// example font settings
			family: 'System',
			size: {
				1: 14,
				2: 16,
				3: 18,
			},
			lineHeight: {
				1: 20,
				2: 24,
				3: 28,
			},
			weight: {
				1: '400',
				2: '600',
				3: '700',
			},
		},
	},

	// Optional: your own themes
	themes: {
		...defaultConfig.themes,
		myLight: {
			background: '#ffffff',
			color: '#000000',
		},
		myDark: {
			background: '#000000',
			color: '#ffffff',
		},
	},

	// Optional: shorthands (alias props)
	shorthands: {
		bg: 'backgroundColor',
		p: 'padding',
		m: 'margin',
	},

	// Optional: for custom components
	media: {
		sm: { maxWidth: 660 },
		md: { maxWidth: 960 },
		lg: { maxWidth: 1200 },
	},
})

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
	interface TamaguiCustomConfig extends Conf {}
}

export { tamaguiConfig }
