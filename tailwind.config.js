import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
             keyframes: {
                fadeIn: {
                'from': { opacity: '0', transform: 'translateY(20px)' },
                'to': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            colors: {
                primary: '#4f46e5',
                secondary: '#10b981',
                danger: '#ef4444',
                dark: '#1f2937',
                light: '#f9fafb',
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
