const API_KEY = 'YOUR_OMDB_API_KEY'; // remplace avec ta clé OMDb gratuite
const container = document.getElementById('movie-container');

const defaultMovies = ['Inception', 'The Matrix', 'Interstellar'];

window.onload = () => {
  defaultMovies.forEach(title => fetchMovie(title));
};

function fetchMovie(title) {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        createCard(data);
      }
    });
}

function createCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}">
    <div class="card-content">
      <h3>${movie.Title}</h3>
      <p>${movie.Plot.substring(0, 100)}...</p>
    </div>
  `;
  container.appendChild(card);
}

function searchMovies() {
  const query = document.getElementById('searchInput').value;
  container.innerHTML = '';
  if (query) fetchMovie(query);
}

// Theme toggle
document.getElementById('theme-toggle').onclick = () =>
  document.body.classList.toggle('dark');
