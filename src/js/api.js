fetch("http://localhost:3001/teste")
  .then((response) => response.json())
  .then((data) => console.log(data));
