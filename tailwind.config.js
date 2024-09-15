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
}
