const corsAnywhere = require("cors-anywhere");

const port = 8080;
const host = process.env.HOST || "localhost";

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server running on ${host}:${port}`);
  });
