const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const html = path.resolve(__dirname, "../../dist/index.html");
  const htmlContent = fs.readFileSync(html, "utf-8");
  res.send(htmlContent);
});

app.listen(5000, () => {
  console.log("app is listening to port 5000");
});
