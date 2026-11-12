const movieTitles = [
    'Космическая станция',
    'Тайна старого дома',
    'Поезд на север',
];
const moviePosters = [
    'covers/space.jpg',
    'covers/house.jpg',
    'covers/train.jpg',
];

const movieList = document.getElementById('movieList');

function renderMovies() {
    movieList.innerHTML = '';

    movieTitles.forEach((movieTitle, index) => {
        const item = document.createElement('li');

        const poster = document.createElement('img');
        poster.src = moviePosters[index];
        poster.alt = '';
        poster.width = 64;

        const title = document.createElement('span');
        title.textContent = movieTitle;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Удалить";

        item.append(poster, title, deleteBtn);
        movieList.append(item);

        deleteBtn.addEventListener('click', () =>{
            movieTitles.splice(index, 1);
            moviePosters.splice(index, 1);
            renderMovies();
        });
    });
}

renderMovies()


const addMovie = document.getElementById('addMovie');
const movieName = document.getElementById('movieName');
const moviePoster = document.getElementById('moviePoster');

addMovie.addEventListener('click', () => {
    const movieNameValue = movieName.value.trim();
    const moviePosterValue = moviePoster.value.trim();

    if(movieNameValue == "" || moviePosterValue == ""){
        alert("ВВЕДИТЕ ЧТО-НИБУДЬ");
        return;
    }
    else{
        movieTitles.push(movieNameValue);
        moviePosters.push(moviePosterValue);
        movieNameValue.innerHTML = "";
        moviePosterValue.innerHTML = "";
        renderMovies()
    }

});