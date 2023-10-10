const express = require("express");
const axios = require("axios");

const controllerHome = require("./src/controllers/controllerHome");
const controllerData = require("./src/controllers/controllerData");

const routes = express.Router();

routes.get("/", controllerHome.paginaHome);

routes.post("/enviaCidade", controllerData.enviaCidade);

routes.post("/enviaHora", controllerData.enviaHora);

module.exports = routes;
