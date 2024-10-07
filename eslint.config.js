// import js from "@eslint/js";

// export default [
//     js.configs.recommended,

//    {
//        rules: {
//            "no-unused-vars": "warn",
//            "no-undef": "warn"
//        }
//    }
// ];

const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
      rules: {
          "no-unused-vars": "warn",
          "no-undef": "warn"
      }
  }
];
