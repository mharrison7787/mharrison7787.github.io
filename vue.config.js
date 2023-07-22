const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/mharrison7787.github.io/"
      : "/",
};
