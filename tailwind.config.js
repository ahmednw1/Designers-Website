/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {

      backgroundImage:
      {
         mainBg : "url('C:/Users/ahmed/OneDrive/Documents/App/WebApp/src/app/Data/images/bg2.png')",
         mainBg1 : "url('C:/Users/ahmed/OneDrive/Documents/App/WebApp/src/app/Data/images/bg4.png')",
         mainBg2 : "url('C:/Users/ahmed/OneDrive/Documents/App/WebApp/src/app/Data/images/bg3.png')",
         mainBg3 : "url('C:/Users/ahmed/OneDrive/Documents/App/WebApp/src/app/Data/images/bg5.png')",
       
      }

    ,
    fontFamily:{
      custom:['Arvo'],
      custom2:['Lato'],
      custom3:['Exo'],
      custom4:['Roboto']
    }
  }
  },
  plugins: [],
}
