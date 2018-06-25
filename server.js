const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require("fs");
const path = require("path");

const indexHtml = (() => {
  return fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.get("*", (req, res)=>{
  res.write(indexHtml);
  res.end();
});

app.listen(port, () => {
  console.log(port);
});
