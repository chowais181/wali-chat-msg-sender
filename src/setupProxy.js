const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/messages", {
      target: "https://api.wali.chat/v1/messages",
      changeOrigin: true,
    })
  );
};
