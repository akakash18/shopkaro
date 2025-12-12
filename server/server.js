const http = require("http");
const PORT = 5000;
const app = require("./app")

const server = http.createServer(app);

server.listen(PORT, (req, res) => {
  console.log("server started");
});
