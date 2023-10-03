const axios = require("axios");

exports.paginaHome = (req, res) => {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=-23.54&longitude=-46.63&hourly=temperature_2m`
    )
    .then((response) => console.log(response.data))
    .catch((erro) => {
      console.log(erro);
    });
};
