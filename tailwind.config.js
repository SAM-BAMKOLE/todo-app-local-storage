/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js}'],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#3a0ca3',

                    secondary: '#fcbf49',

                    accent: '#eae2b7'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
}
