const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx,html}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
        './i18n/**/*.{md,mdx}',
  ],
  safelist: [
    // Keep arbitrary color utilities that reference Docusaurus/Infima CSS variables.
    { pattern: /(bg|text|border|fill|stroke|ring|outline)-\[(?:var\(--ifm-[^)]*\))\]/ },
    // Also keep opacity-modified forms like text-[var(--ifm-...)]\/\d+
    { pattern: /(bg|text|border|fill|stroke|ring|outline)-\[(?:var\(--ifm-[^)]*\))\]\/\d{1,3}/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open-Sans"', ...fontFamily.sans],
        jakarta: ['"Manrope"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: '4px',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        primary: {
          DEFAULT:
            'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
          100: 'rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)',
          200: 'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:
            'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)',
        },
        text: {
          400: 'rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)',
        },
        darkblue: '#0a0e1b',
        darkerblue: '#04050a',
        darkestblue: '#010101',
      },
    },
  },
  plugins: [],
};
