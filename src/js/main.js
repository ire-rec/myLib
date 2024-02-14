"use strict";
// GLOBAL VAR
const inputTitle = document.querySelector(".inputTitle_js");
const inputSearch = document.querySelector(".inputSearch_js");
const ulBooks = document.querySelector(".ul_books_js");

// DATOS GLOBALES
let data = [];

//FUNCTIONS

const renderBooks = () => {
  let html = "";

  for (const item of data) {
    if (item.cover_edition_key === undefined) {
      html += `<div class="div hide"><li><img src="https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg" alt="book cover" class="cover_book"/></li>`;
    } else {
      html += `<div class="div"><li><img src="https://covers.openlibrary.org/b/olid/${item.cover_edition_key}.jpg" alt="book cover" class="cover_book"/></li>`;
    }
    html += `<li class="title">${item.title}</li>`;
    html += `<li class="author">${item.author_name}</li></div>`;
  }
  ulBooks.innerHTML = html;
};

const handleClick = (ev) => {
  console.log("funciona");
  getData();
};

inputSearch.addEventListener("click", handleClick);

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
