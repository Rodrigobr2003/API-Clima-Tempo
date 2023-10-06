fetch("http://localhost:3001/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //Nome da cidade
    const nomeCidadeDOM = document.querySelector("#cidade");
    nomeCidadeDOM.innerHTML = data.name;

    //Temperatura
    const temperaturaDOM = document.querySelector("#temperatura");
    let calcTemp = data.main.temp - 273.15;
    temperaturaDOM.innerHTML = `${Math.round(calcTemp)} °C`;

    //Dia
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

    //Hora
    const horaDOM = document.querySelector("#hora");
    let horaAtual = date.getHours();
    let minAtual = date.getMinutes();
    if (minAtual < 10) minAtual = `0${minAtual}`; //não é o jeito certo de se fazer
    horaDOM.innerHTML = `${horaAtual}:${minAtual}`;

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
  });
