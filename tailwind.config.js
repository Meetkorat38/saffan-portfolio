/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'archivo': ['"Archivo Narrow"', 'sans-serif'],
            },
            colors: {
                'paper': '#f4f4f0',
                'ink': '#111111',
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
                'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
            }
        }
    },
    plugins: [],
}
