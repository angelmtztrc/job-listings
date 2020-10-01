module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/*.js', './src/components/*.js'],
  theme: {
    extend: {
      colors: {
        'cyan-primary': '#5ba4a4',
        'cyan-light-gryish': '#eef6f6',
        'cyan-very-light-grayish': '#effafa',
        'cyan-dark-grayish': '#7b8e8e',
        'cyan-very-dark-grayish': '#2c3a3a'
      }
    }
  },
  variants: {},
  plugins: []
};
