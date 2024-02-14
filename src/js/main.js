"use strict";
// GLOBAL VAR
const inputTitle = document.querySelector(".inputTitle_js");
const inputSearch = document.querySelector(".inputSearch_js");
const ulBooks = document.querySelector(".ul_books_js");

// DATOS GLOBALES
let data = [];

//FUNCTIONS
const getData = () => {
  let search = inputTitle.value;
  fetch(`https://openlibrary.org/search.json?q=${search}`)
    .then((response) => response.json())
    .then((json) => {
      data = json.docs;
      console.log(data);
      renderBooks();
    });
};
