document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  
  // Simple validation (can be expanded)
  if (name === '' || email === '' || subject === '' || message === '') {
      showMessage('Please fill in all fields.', 'error');
      return;
  }
  
  // Show success message
  showMessage('Thank you for contacting us. We will get back to you soon.', 'success');
  
  // Clear form (optional)
  document.getElementById('contact-form').reset();
});

function showMessage(message, type) {
  var formMessage = document.getElementById('form-message');
  formMessage.textContent = message;
  formMessage.className = 'form-message ' + type;
  formMessage.style.display = 'block';
}
