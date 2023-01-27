const options = { method: "GET", headers: { accept: "application/json" } };

fetch(
  "https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=test&language=en&key=29CB0A3EE8A74953A71A7964758809DA",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));