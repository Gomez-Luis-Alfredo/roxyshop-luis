/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#fef1f8",
        SecondaryColor: "#fea3d3",
        DarkColor: "#A50F4A",
        ExtraDarkColor: "#540322",
      },
    },
  },
  plugins: [],
}
