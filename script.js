//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  // Get input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return;
  }

  // Create new row
  const list = document.getElementById("book-list");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  list.appendChild(row);

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Delete book
document.getElementById("book-list").addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
