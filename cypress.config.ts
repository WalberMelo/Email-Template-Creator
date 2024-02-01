import { defineConfig } from "cypress";

require("dotenv").config();
console.log(process.env.CYPRESS_USER_EMAIL, process.env.CYPRESS_USER_PASSWORD);

export default defineConfig({
  env: {
    email: process.env.CYPRESS_USER_EMAIL,
    password: process.env.CYPRESS_USER_PASSWORD,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
