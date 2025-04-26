/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        muted: 'rgb(var(--color-muted))',
        gy: 'rgb(var(--color-gray))',
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        'muted-background': 'rgb(var(--color-muted-background))',
        border: 'rgb(var(--color-border))',
        text: 'rgb(var(--color-text))',
        input: 'rgb(var(--color-input))',
      },
      zIndex: {
        p: 599,
      },
    },
  },
  plugins: [],
}