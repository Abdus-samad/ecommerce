module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        pad: ['68px 0 100px', '68px 0 50 px', '110px 2rem 50px']
      },
      gap :{
        row: ['15px', '20px', '0'],
        column: '30px'
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}