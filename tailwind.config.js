import flowbite from "flowbite-react/tailwind"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      brownbg: '#674d00',
      blackbg: '#031e00',
      yellowbg: '#e7d37f',
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

