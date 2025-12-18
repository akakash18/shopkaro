const express = require("express");
const cors = require("cors");
const electronicsRoutes = require("./src/routes/electronicsRoutes/electronics.routes");
const mensRouter = require("./src/routes/mensRoutes/mens.routes");
const womensRouter = require("./src/routes/womensRoutes/womens.routes");
const jeweleryRoutes = require("./src/routes/jeweleryRoutes/jewelery.routes")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/electronics", electronicsRoutes);
app.use("/mens", mensRouter);
app.use("/womens", womensRouter);
app.use("/jewelery", jeweleryRoutes);

module.exports = app;
