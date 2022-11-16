require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "server-backuper",
      script: "./index.js",
      exp_backoff_restart_delay: 500,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      env: {
        TOKEN: process.env.TOKEN,
        INSTANCE: 1,
      },
    },
  ],
};
