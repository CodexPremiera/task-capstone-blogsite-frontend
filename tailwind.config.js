/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black_main: "#242424",
        gray_text: "#6B6B6B",
        banner: "rgb(255, 192, 23)",
        green_custom: "rgb(26, 137, 23)",
        green_hover: "#156D12"
      },
      fontFamily: {
        title: `lucidagrande, Georgia, Cambria,Times New Roman, Times, serif;`,
        content: `gt-super, Georgia, Cambria,Times New Roman, Times, serif;`,
        texts: `sohne, Helvetica Neue, Helvetica, Arial, sans-serif`,
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(280px, 1fr))",
      }
    },
  },
  plugins: [],
}