module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#18a058',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
