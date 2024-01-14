document.addEventListener("DOMContentLoaded", function() {
  // Your code here
// Get the chatlog element
var chatlog = document.querySelector(".chatlog");

// Get the chatlog message groups
var chatGroups = document.querySelectorAll(".chatlog__message-group");

// Set the number of messages per page
var messagesPerPage = 10;

// Calculate the number of pages
var totalPages = Math.ceil(chatGroups.length / messagesPerPage);

// Create a pagination element
var pagination = document.createElement("div");
pagination.className = "pagination";

// Create a function to show a page of messages
function showPage(page) {
  // Hide all messages
  for (var i = 0; i < chatGroups.length; i++) {
    chatGroups[i].style.display = "none";
  }

  // Show the messages for the current page
  var start = (page - 1) * messagesPerPage;
  var end = Math.min(start + messagesPerPage, chatGroups.length);
  for (var i = start; i < end; i++) {
    chatGroups[i].style.display = "block";
  }

  // Highlight the current page number
  var pageNumbers = document.querySelectorAll(".pagination__number");
  for (var i = 0; i < pageNumbers.length; i++) {
    pageNumbers[i].classList.remove("active");
  }
  pageNumbers[page - 1].classList.add("active");
}

// Create a function to generate the pagination numbers
function generatePagination() {
  // Clear the pagination element
  pagination.innerHTML = "";

  // Create a previous button
  var prevButton = document.createElement("button");
  prevButton.className = "pagination__button";
  prevButton.textContent = "Prev";
  prevButton.addEventListener("click", function () {
    // Get the current page number
    var currentPage = document.querySelector(".pagination__number.active")
      .textContent;

    // Go to the previous page if possible
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });

  // Append the previous button to the pagination element
  pagination.appendChild(prevButton);

  // Create a span for the page numbers
  var pageNumbersSpan = document.createElement("span");
  pageNumbersSpan.className = "pagination__numbers";

  // Loop through the total pages and create a number for each one
  for (var i = 1; i <= totalPages; i++) {
    var pageNumber = document.createElement("button");
    pageNumber.className = "pagination__number";
    pageNumber.textContent = i;
    pageNumber.addEventListener("click", function () {
      // Show the page corresponding to the clicked number
      showPage(this.textContent);
    });

    // Append the number to the span
    pageNumbersSpan.appendChild(pageNumber);
  }

  // Append the span to the pagination element
  pagination.appendChild(pageNumbersSpan);

  // Create a next button
  var nextButton = document.createElement("button");
  nextButton.className = "pagination__button";
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", function () {
    // Get the current page number
    var currentPage = document.querySelector(".pagination__number.active")
      .textContent;

    // Go to the next page if possible
    if (currentPage < totalPages) {
      showPage(+currentPage + 1);
    }
  });

  // Append the next button to the pagination element
  pagination.appendChild(nextButton);

  // Append the pagination element to the chatlog element
  chatlog.appendChild(pagination);

}

// Call the generatePagination function to create the pagination numbers
generatePagination();

// Show the first page by default
showPage(1);
});
