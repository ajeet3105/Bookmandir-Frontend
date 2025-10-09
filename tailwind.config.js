// // tailwind.config.js
// export default {
//   darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
export default {
  darkMode: "class",   // ✅ important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ sabhi React files include honi chahiye
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
