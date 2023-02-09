const express = require("express");
const path = require("path");
const app = express();
const cors=require("cors")
const { sequelize } = require("./models");
const { rootRouter }=require("./routers")
// chuyen sang dang chuoi-json
app.use(cors());
app.use(express.json());
//cai dat static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public",express.static(publicPathDirectory));

// combind with router
app.use("/api/v1",rootRouter);

app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
