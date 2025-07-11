import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2F855A', // green-700
        secondary: '#D69E2E', // yellow-600
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})