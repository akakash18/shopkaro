const http = require("http");
const PORT = process.env.PORT || 5000;
const app = require("./app");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");

const server = http.createServer(app);
app.use(morgan("dev"));

connectDB();
server.listen(PORT, (req, res) => {
  console.log("server started");
});
