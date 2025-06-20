module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorsred: "var(--colorsred)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        textbodylight: "var(--textbodylight)",
        themedarklight: "var(--themedarklight)",
        "themegray-100": "var(--themegray-100)",
        "themegray-800": "var(--themegray-800)",
        themeprimary: "var(--themeprimary)",
        themesecondarydefault: "var(--themesecondarydefault)",
        themewhite: "var(--themewhite)",
        themewhitedefault: "var(--themewhitedefault)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-1": "var(--body-1-font-family)",
        "body-1-bold": "var(--body-1-bold-font-family)",
        button: "var(--button-font-family)",
        "button-bold": "var(--button-bold-font-family)",
        "headline-1-bold": "var(--headline-1-bold-font-family)",
        "headline-4-bold": "var(--headline-4-bold-font-family)",
        "headline-6": "var(--headline-6-font-family)",
        "headline-6-bold": "var(--headline-6-bold-font-family)",
        "subtitle-1": "var(--subtitle-1-font-family)",
        "text-caption": "var(--text-caption-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
        "object-shadow-1": "var(--object-shadow-1)",
        "object-shadow-2": "var(--object-shadow-2)",
        "shadow-1": "var(--shadow-1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
