const bookForm = document.getElementById("bookForm");

fetch("books.json")
  .then((res) => res.json())

  .then((data) => {
    data.books.forEach((book) => {
      const bookDiv = document.createElement("div");
      const buttonDiv = document.createElement("div");

      const image = document.createElement("img");
      image.src = book.bild;
      bookDiv.appendChild(image);

      const titleLabel = document.createElement("div");

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




      const addButton = document.createElement("button");
      const antalVaror = document.createElement("p");
      bookDiv.appendChild(antalVaror)
      addButton.type = "button";
      addButton.textContent = "Lägg till";
      let count = 0;
      antalVaror.textContent = "Antal tillagda: " + count;
      addButton.addEventListener("click", function () {

        count++;
        antalVaror.textContent = "Antal tillagda: " + count;

      });

      buttonDiv.appendChild(addButton);
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Ta bort";
      removeButton.addEventListener("click", function () {

        count--;
        if (count <= 0) {
          count = 0;
        }
        antalVaror.textContent = "Antal tillagda: " + count;

      });
      buttonDiv.appendChild(removeButton);
      bookDiv.appendChild(buttonDiv);

      bookForm.appendChild(bookDiv);
    });



  });





