const cityForm = document.querySelector("#cityForm");

cityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cidade = document.getElementById("buscar-cidade").value;

  fetch("/enviaCidade", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cidade }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`API CLIMA: ${data}`);
      //Nome da cidade
      const nomeCidadeDOM = document.querySelector("#cidade");
      nomeCidadeDOM.innerHTML = data.name;

      //Bandeira do país
      const country_code = data.sys.country;
      const flagDOM = document.querySelector(".flagImg");

      flagDOM.src = `https://flagsapi.com/${country_code}/flat/24.png`;

      //Temperatura
      const temperaturaDOM = document.querySelector("#temperatura");
      let calcTemp = data.main.temp - 273.15;
      temperaturaDOM.innerHTML = `${Math.round(calcTemp)} °C`;

      //Hora e Dia
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      mostraHora(lat, lon);

      //Chuva
      const chuvaDOM = document.querySelector("#chuva");
      if (data.rain !== undefined) {
        chuvaDOM.innerHTML = `${Math.round(data.rain["1h"] * 10)}%`;
      } else {
        chuvaDOM.innerHTML = `0%`;
      }

      //Umidade
      const umidadeDOM = document.querySelector("#umidade");
      umidadeDOM.innerHTML = `${data.main.humidity}%`;

      //Vento
      const ventoDOM = document.querySelector("#vento");
      ventoDOM.innerHTML = `${Math.round(data.wind.speed * 3.6)} km/h`;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
});

function mostraHora(lat, lon) {
  fetch("/enviaHora", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lat, lon }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const horaDOM = document.querySelector("#hora");

      //Formatação hora
      const stringData = data.formatted;
      const transformador = new Date(stringData);
      let horas = transformador.getHours();
      let minutos = transformador.getMinutes();
      const horaFormatada = `${horas}:${minutos}`;

      horaDOM.innerHTML = horaFormatada;

      //Formatação dia
      const diaDOM = document.querySelector("#dia");
      let date = new Date();
      let diaAtual = date.getDay();

      if (diaAtual == 0) diaAtual = "Domingo";
      if (diaAtual == 1) diaAtual = "Segunda-Feira";
      if (diaAtual == 2) diaAtual = "Terça-Feira";
      if (diaAtual == 3) diaAtual = "Quarta-Feira";
      if (diaAtual == 4) diaAtual = "Quinta-Feira";
      if (diaAtual == 5) diaAtual = "Sexta-Feira";
      if (diaAtual == 6) diaAtual = "Sábado";

      diaDOM.innerHTML = `${diaAtual} ,`;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
