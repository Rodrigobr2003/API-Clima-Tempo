fetch("http://localhost:3001/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
