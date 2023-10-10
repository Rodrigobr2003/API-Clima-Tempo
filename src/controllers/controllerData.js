const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.APIKEY;

exports.enviaCidade = (req, res) => {
  const cidade = req.body.cidade;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((erro) => {
      console.log(erro);
      res.status(500).send("Erro ao buscar dados da API OpenWeather");
    });
};
