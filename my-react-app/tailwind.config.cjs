module.exports = {
  content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        gray: {
          50 : "#f9fafb", //base
          100 : "#f3f4f6",
          200 : "#e5e7eb",
          300 : "#d1d5db",
          400 : "#9ca3af",
          500 : "#6b7280",
          600 : "#4b5563",
          700 : "#374151", //for text
          800 : "#1f2937",
          900 : "#111827",
          950 : "#030712",
        },
        neutral: {
          50  : "#fafafa",
          100 : "#f5f5f5",
          200 : "#e5e5e5",
          300 : "#d4d4d4",
          400 : "#a3a3a3",
          500 : "#737373",
          600 : "#525252",
          700 : "#404040",
          800 : "#262626",
          900 : "#171717",
          950 : "#0a0a0a",
        },
        'white': '#f8fafc',
      },
      fontFamily: {
        sofadi: ['Sofadi One', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}