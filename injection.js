// Get a reference to the container element
const container = document.getElementById('header');

// Fetch the content from another HTML file
fetch('../pages/header.html')
  .then(response => response.text())
  .then(content => {
    // Set the retrieved content to the container element
    container.innerHTML = content;
  })
  .catch(error => {
    console.error('Error:', error);
  });
