const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.use(routes);

app.listen(3001, () => {
  console.log("Server esta rodando!");
  console.log("http://localhost:3001");
});
