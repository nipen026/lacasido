/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
        typing: 'typing 3s steps(30, end), blink .75s step-end infinite',
        blink: 'blink 1s step-end infinite',
        shake: 'shake 0.6s ease',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
         shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' }
        }
      },
      colors: {
        primary: '#ba9e80',    
        secondary: '#ffffff',   // White
        black: '#232323',       // Black
        yellow: '#e0af50',       // yellow
      },
    },
  },
  plugins: [],
}
