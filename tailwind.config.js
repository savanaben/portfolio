/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '18px',
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
      },
      textColor: {
        'link': '#0070f3',
        'link-hover': '#0050a3',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.list-inside': {
          'li': {
            paddingLeft: '1.5em',
            textIndent: '-1.5em',
          },
        },
      })
    },
  ],
  
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'sm:grid-cols-1',
    'sm:grid-cols-2',
    'sm:grid-cols-3',
    'sm:grid-cols-4',
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
  ],
}
