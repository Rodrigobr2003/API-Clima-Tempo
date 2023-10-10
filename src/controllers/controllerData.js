const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.APIKEY;
const tempoApikey = process.env.TEMPOAPIKEY;

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

exports.enviaHora = (req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;

  axios
    .get(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${tempoApikey}&format=json&by=position&lat=${lat}&lng=${lon}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((erro) => {
      console.log(erro);
      res.status(500).send("Erro ao buscar dados da API Timezone");
    });
};
