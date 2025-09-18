// Chave da API - Substitua pela sua chave da API OMDb em omdbapi.com
// Obtenha gratuitamente em https://www.omdbapi.com/apikey.aspx
const API_KEY = 'SUA_CHAVE_AQUI';
const API_URL = 'https://www.omdbapi.com/';

// Seleção dos elementos do DOM para manipulação
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const errorDiv = document.getElementById('error');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const movieDetails = document.getElementById('movie-details');

// Configuração dos event listeners para interações do usuário
searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o reload da página
    searchMovies(); // Chama a função de busca
});

// Evento para fechar o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
// Evento para fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
});

// Função de busca
async function searchMovies() {
    const query = searchInput.value.trim();
    if (!query) {
        showError('Por favor, digite um nome de filme ou série.');
        return;
    }

    showLoading();
    hideError();
    clearResults();

    try {
        const response = await fetch(`${API_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
            displayResults(data.Search);
        } else {
            showError(data.Error || 'Nenhum resultado encontrado.');
        }
    } catch (error) {
        showError('Erro ao conectar com a API. Verifique sua conexão.');
    } finally {
        hideLoading();
    }
}

// Exibe os resultados
function displayResults(movies) {
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        results.appendChild(card);
    });
}

// Cria o card do filme
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => showMovieDetails(movie.imdbID);

    const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/180x270?text=Sem+Imagem';

    card.innerHTML = `
        <img src="${poster}" alt="Pôster de ${movie.Title}">
        <div class="card-content">
            <h3 class="card-title">${movie.Title}</h3>
            <p class="card-info">${movie.Year}</p>
            <p class="card-rating">${movie.imdbRating || 'N/A'}</p>
        </div>
    `;

    return card;
}

// Exibe detalhes do filme no modal
async function showMovieDetails(imdbID) {
    showLoading();

    try {
        const response = await fetch(`${API_URL}?i=${imdbID}&apikey=${API_KEY}`);
        const movie = await response.json();

        if (movie.Response === 'True') {
            displayMovieDetails(movie);
            modal.classList.remove('hidden');
        } else {
            showError('Erro ao carregar detalhes do filme.');
        }
    } catch (error) {
        showError('Erro ao conectar com a API.');
    } finally {
        hideLoading();
    }
}

// Exibe detalhes do filme
function displayMovieDetails(movie) {
    const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sem+Imagem';

    movieDetails.innerHTML = `
        <img src="${poster}" alt="Pôster de ${movie.Title}" style="max-width: 200px; float: left; margin-right: 20px;">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Gênero:</strong> ${movie.Genre}</p>
        <p><strong>Diretor:</strong> ${movie.Director}</p>
        <p><strong>Elenco:</strong> ${movie.Actors}</p>
        <p><strong>Avaliação IMDb:</strong> ${movie.imdbRating}</p>
        <p><strong>Sinopse:</strong> ${movie.Plot}</p>
    `;
}

// Funções utilitárias
function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    errorDiv.classList.add('hidden');
}

function clearResults() {
    results.innerHTML = '';
}
