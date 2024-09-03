/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      brownbg: '#674d00',
      blackbg: '#031e00',
      yellowbg: '#e7d37f',
    },
    backgroundImage: {
      // 'hero-home': "url('/HomePage/1.jfif')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

