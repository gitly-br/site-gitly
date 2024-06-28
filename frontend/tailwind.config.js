/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'text': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'title': '#FFFFFF',
        'text': '#DDDDDD',
        'green': '#11562F',
      },
      fontSize: {
        'title': '60px',
        'text': '20px',
      },
      fontWeight: {
        'title': 700,
        'text': 400,
      },
      lineHeight: {
        'title': '76px',
        'text': '28px',
      },
    },
  },
  plugins: [],
};
