/** @type {import('tailwindcss').Config} */
let plugin = import("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      backgroundImage: {
        "home-1": "url('/fajitas.jpg')",
        "home-2": "url('/lady.jpg')",
        "home-3": "url('/waiter.jpg')",
        "home-4": "url('/making.jpg')",
        "home-5": "url('/guacamole-dip.jpg')",
        "home-6": "url('/food.jpg')",
        "home-7": "url('/fiesta.webp')",
        "home-8": "url('/tacoss.jpg')",
        "home-9": "url('/tacos_drink.webp')",
      },
      colors: {
        yellow: "#FEBA18",
        green: "#29741D",
        red: "#E22137",
        white: "#FFFBF1",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};
