const axios = require("axios");

exports.sendData = (req, res) => {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=-23.54&longitude=-46.63&hourly=temperature_2m`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
