const corsAnywhere = require("cors-anywhere");
require("dotenv").config();
const port = 8080;
const host = process.env.HOST || "localhost";

corsAnywhere
  .createServer({
    originWhitelist: ["https://wali-chat-msg-sender.vercel.app/"], // Allow all origins
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server running on ${host}:${port}`);
  });
