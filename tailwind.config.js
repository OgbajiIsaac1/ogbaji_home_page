/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary': '#1a2332',
        'secondary': '#d4af37',
        'accent': '#4a9b8e',
        'neutral': '#f8f9fa',
        'text': '#2c3e50'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['Source Code Pro', 'monospace']
      }
    }
  },
  plugins: []
}
