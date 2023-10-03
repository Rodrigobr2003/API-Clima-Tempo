const express = require("express");
const axios = require("axios");

const controllerHome = require("./src/controllers/controllerHome");

const routes = express.Router();

routes.get("/", controllerHome.paginaHome);

routes.get("/data", controllerData.sendData);

module.exports = routes;
