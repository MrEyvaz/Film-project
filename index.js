const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const magnifying_glass = document.querySelector('.fa-solid.fa-magnifying-glass')

const API_KEY = 'ef15ab55';

magnifying_glass.addEventListener('click', fetchTodos);

async function fetchTodos(event) {
    event.preventDefault();
    const movieTitle = todoInput.value.trim();
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

        // Remove the previous search result
        todoList.innerHTML = '';

        const displayFlexDiv = document.createElement('div');
        displayFlexDiv.classList.add('displayFlexDiv');

        //first div
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
        <h2>${data.Title}</h2>
        <p>Release Year: ${data.Year}</p>
        <img src="${data.Poster}" style="height: 434px;">
        `;

        //second div
        const moviedetails = document.createElement('div');
        moviedetails.classList.add('movie-details');

        moviedetails.innerHTML = `
        <p>Actors: ${data.Actors}</p>
        <p>Awards: ${data.Awards}</p><p>Language: ${data.Language}</p>
        <p>Plot: ${data.Plot}</p>
        <p>Runtime: ${data.Runtime}</p>
        <p>IMDB Rating: ${data.imdbRating}</p>
        <p>Country: ${data.Country}</p>
        <p>Genre: ${data.Genre}</p>
      `;

        displayFlexDiv.appendChild(movieDiv)
        displayFlexDiv.appendChild(moviedetails)

        todoList.appendChild(displayFlexDiv);

    } catch (error) {
        console.log(error);
    }
}