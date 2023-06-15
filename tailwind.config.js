/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      VeryDarkBlueBG: "hsl(230, 17%, 14%)",
      VeryDarkBlueTop: "hsl(232, 19%, 15%)",
      DarkDesaturatedBlueCardBG: "hsl(228, 28%, 20%)",
      DesaturatedBlueText: "hsl(228, 34%, 66%)",
      White: "hsl(0, 0%, 100%)",
      Toggle: "#3fbdab",
      ToggleLight: "hsl(230, 22%, 74%)",
      LimeGreen: "hsl(163, 72%, 41%)",
      BrightRed: "hsl(356, 69%, 56%)",
      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
      YouTube: "hsl(348, 97%, 39%)",

      // light theme

      VeryPaleBlueTop: "hsl(225, 100%, 98%)",
      LightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
      darkGrayishBlue: "hsl(228, 12%, 44%)",
      VeryDarkBlue: "hsl(230, 17%, 14%)",
    },

    extend: {},
  },
  plugins: [],
};
