import fetch from "node-fetch";

exports.paginaHome = (req, res) => {
  const apiKey = process.env.APIKEY;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.render("index", { weatherData: data }); // Passa os dados para o template
    })
    .catch((error) => {
      console.error("Erro ao obter dados meteorológicos:", error);
      res.status(500).json({ error: "Erro ao obter dados meteorológicos" });
    });
};
