/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      marineBlue: 'hsl(213, 96%, 18%)',
      purplishBlue: 'hsl(243, 100%, 62%)',
      pastelBlue: 'hsl(228, 100%, 84%)',
      customLightBlue: ' hsl(206, 94%, 87%)',
      strawberryRed: 'hsl(354, 84%, 57%)',
      coolGray: 'hsl(231, 11%, 63%)',
      lightGray: 'hsl(229, 24%, 87%)',
      mangolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      customWhite: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
