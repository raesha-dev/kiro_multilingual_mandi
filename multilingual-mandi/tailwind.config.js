/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'mandi-green': '#22c55e',
                'mandi-orange': '#f97316',
                'mandi-red': '#ef4444',
                'mandi-blue': '#3b82f6',
            },
            fontFamily: {
                'hindi': ['Noto Sans Devanagari', 'sans-serif'],
            }
        },
    },
    plugins: [],
}