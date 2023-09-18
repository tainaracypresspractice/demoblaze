// Import the dotenv package to load environment variables from .env file
require("dotenv").config();

module.exports = {
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    defaultCommandTimeout: 100000
  }
}
