const movies = [
  { title: "Batman", year: 2022, description: "this is movie about bats" },
  { title: "Avatar", year: 2009, description: "this is movie about blue guys" },
  { title: "Inception", year: 2010, description: "this is deep movie" },
];

const moviesList = document.getElementById("div-list");

for(let i = 0; i < movies.length; i++) {
  moviesList.innerHTML += `
    <h2>${movies[i].title} (${movies[i].year})</h2>
    <p>${movies[i].description}</p>`;
}