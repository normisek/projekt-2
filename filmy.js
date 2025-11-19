

const movieSelect = document.getElementById("movie-select");

async function loadMovies(selectedCategory) {

    const moviesResponse = await fetch(`https://api.tvmaze.com/search/shows?q=${selectedCategory}`)

    const moviesData = await moviesResponse.json();

    const moviesListSection = document.getElementById("movies-list");

    moviesListSection.innerHTML = "";

    moviesData.forEach(function (movieItem) {
        const movieImg = document.createElement("img");
        movieImg.src = movieItem.show.image.medium;
        movieImg.alt = movieItem.show.name;
        moviesListSection.appendChild(movieImg);
    });


}

loadMovies("girl");

movieSelect.addEventListener("change", async function (event) {
    const selectedCategory = event.target.value;
    loadMovies(selectedCategory);
})
