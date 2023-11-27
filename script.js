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

      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Titel: " + book.titel;
      bookDiv.appendChild(titleLabel);
      
      const beskrivning = document.createElement("p")
      beskrivning.textContent = " Beskrivning: " + book.beskrivning;
      bookDiv.appendChild(beskrivning)
      
      const genreLabel = document.createElement("p")
      genreLabel.textContent = " Genre: " + book.genre;
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
    
  
  


