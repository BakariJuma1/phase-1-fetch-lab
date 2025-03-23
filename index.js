function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name; // Use textContent instead of innerHTML for security
    main.appendChild(h2);
  });
}

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Ensure return
    .then((response) => response.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Error fetching books:", error));
}

// Call fetchBooks() when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
