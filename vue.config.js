const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://mharrison7787.github.io/"
      : "/",
};
