function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
  }


function sendFeedback(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);

  // Create an object to hold the form data
  const feedbackData = {};
  formData.forEach((value, key) => {
      feedbackData[key] = value;
  });

  // Make a POST request to the server
  fetch('https://portifolio-backend-4.onrender.com', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify(feedbackData) // Convert the form data object to JSON string
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      // Handle successful response (optional)
      event.target.reset();
      
      
      console.log('Feedback sent successfully!');
      return response.json();
      // You can display a success message or perform any other actions here
  })
  .then(data => {
      var tag = document.getElementById('received');
      tag.innerHTML = data.message || "Sent successfully";
      
  })
  .catch(error => {
      // Handle error (optional)
      console.error('Error sending feedback:', error.message);
      // You can display an error message or perform any other actions here
  });
}

// Attach sendFeedback function to the form submission event
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', sendFeedback);


document.addEventListener('DOMContentLoaded', (event) => {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
  });
  