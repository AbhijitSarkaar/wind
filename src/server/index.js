const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get("/", (req, res) => {
  const html = path.resolve(__dirname, "../../dist/index.html");
  const htmlContent = fs.readFileSync(html, "utf-8");
  res.send(htmlContent);
});

app.use("/static", express.static(path.resolve(__dirname, "../../dist")));

app.listen(PORT, () => {
  console.log("app is listening to port 5000");
});
