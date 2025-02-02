/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        header_bg:'rgba(46, 134, 171, 1)',
        body_bg:'rgba(244, 244, 244, 1)',
        header_hover_color:'rgba(246, 245, 174, 1)',
        button_color:'rgba(242, 66, 54, 1)',
        insta_card_bg:'rgba(225, 48, 108, .75)',
        insta_button_bg:'rgba(255, 255, 255, 1)',
        insta_button_text:'rgba(225, 48, 108, 1)',
        linkedin_card_bg:' rgba(245, 245, 245, 1)',
        linkedin_button_bg:'rgba(10, 102, 194, 1) ',
        github_card_bg:'rgba(36, 41, 46, .8) ',
        insta_button_hover:' rgba(195, 38, 88, 1)',
        linkedin_button_hover:'rgba(8, 82, 154, 1) ',
        github_button_hover:'rgba(20, 23, 32, 1)'
      },
      fontFamily: {
        poppins: ['Poppins'],
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
      },
     
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}