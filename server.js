const express = require("express");
const path = require("path");

const app = express();

app.listen(3001, () => {
  console.log("Server esta rodando!");
  console.log("http://localhost:3001");
});
