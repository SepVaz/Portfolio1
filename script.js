

const bookForm = document.getElementById('bookForm');

fetch('books.json')

    .then(res => res.json())

    .then(data => {
        data.books.forEach(book => {
            const bookDiv = document.createElement('div');

            const titleLabel = document.createElement('label');
            titleLabel.textContent = 'Titel: ' + book.titel;
            bookDiv.appendChild(titleLabel);

            bookForm.appendChild(bookDiv);
        });
    })
   



  
