const axios = require("axios");
require("dotenv").config();

exports.sendData = (req, res) => {
  const apiKey = process.env.APIKEY;

  axios
    .get(
      //-23.54     -46.63   -> sp capital
      `https://api.openweathermap.org/data/2.5/weather?lat=-23.54&lon=-46.63&appid=${apiKey}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
