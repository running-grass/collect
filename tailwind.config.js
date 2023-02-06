module.exports = {
  mode: "jit",
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class", // or 'media' or 'class'
  // important: '#__next',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};