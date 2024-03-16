/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cardBg': '#f5f2ed',
        'brownish': '#3a3a3a',
        'classy': {
          'black': '#4c4637',
          'darkblue': '#8fb5ad',
          'gray': '#b8aa87',
        },
        'twisted': {
          'green': '#00755d',
        },
        'neighbor': {
          'orange': '#fb8f55',
        },
        'skipshade': {
          'orange': '#ffcaa4',
        },
        // 'classyBlack': '#4c4637',
        // 'classyDarkBlue': '#8fb5ad',
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        'card': '36rem',
      },
      fontFamily: {
        "rancho": ['Rancho', 'cursive'],
      }
    },
  },
  plugins: [],
}

