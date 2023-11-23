const bookForm = document.getElementById("bookForm");

fetch("books.json")
  .then((res) => res.json())

  .then((data) => {
    data.books.forEach((book) => {
      const bookDiv = document.createElement("div");

      const image = document.createElement("img");
      image.src = book.bild;
      bookDiv.appendChild(image);

      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Titel: " + book.titel;
      bookDiv.appendChild(titleLabel);

      const addButton = document.createElement("button");
      addButton.type = "button";
      addButton.textContent = "Lägg till ny bok";
      addButton.addEventListener("click", function () {
       
      });

      bookDiv.appendChild(addButton);
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Ta bort";
      removeButton.addEventListener("click", function () {
      
      });
      bookDiv.appendChild(removeButton);

      bookForm.appendChild(bookDiv);
    });
  });
