const express = require("express");

const controllerHome = require("./src/controllers/controllerHome");

const routes = express.Router();

routes.get("/", controllerHome.paginaHome);

module.exports = routes;
