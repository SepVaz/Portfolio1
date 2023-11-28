const bookForm = document.getElementById("bookForm");
const inputForm = document.getElementById("inputForm")
const bookSelect = document.getElementById("bookSelect")
const chooseGenre = document.getElementById("chooseGenre")
const inputField = document.getElementById("inputField")
const imageUrl = document.getElementById("imageUrl")

let bookArray = ['']

bookForm.appendChild(bookArray)

fetch("books.json")
  .then((res) => res.json())

  .then((data) => {
    data.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      const buttonDiv = document.createElement("div");

      const image = document.createElement("img");
      image.src = book.bild;
      bookDiv.appendChild(image);

      const titleDiv = document.createElement("div");
      titleDiv.className = 'book-title';
      titleDiv.innerHTML = `Titel: <span class="book-name">${book.titel}</span>`;
      bookDiv.appendChild(titleDiv);

      const beskrivning = document.createElement("p")
      beskrivning.className = 'book-desc'
      beskrivning.innerHTML = `Beskrivning: <span class="desc-text">${book.beskrivning}</span>`;
      bookDiv.appendChild(beskrivning)

      const genreLabel = document.createElement("p")
      genreLabel.className = 'book-genre'
      genreLabel.innerHTML = `Genre: <span class="genre-text">${book.genre}</span>`;
      bookDiv.appendChild(genreLabel)

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Ta bort";
      removeButton.addEventListener("click", function () {
        
        bookForm.removeChild(bookDiv)

      });
      buttonDiv.appendChild(removeButton);
      bookDiv.appendChild(buttonDiv);
      bookForm.appendChild(bookDiv);
    });
  });





