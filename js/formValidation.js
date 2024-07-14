function formValidation() {
    // Get form elements
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Event listener for form submission
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate name (at least 3 characters)
      if (nameInput.value.trim().length < 3) {
        alert("Name must be at least 3 characters.");
        return;
      }
  
      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Validate message (not empty)
      if (messageInput.value.trim() === "") {
        alert("Message cannot be empty.");
        return;
      }
  
      // Form is valid, submit it (you can replace this with your server-side logic)
      alert("Form submitted successfully!");
      // contactForm.submit(); // Uncomment this line to submit the form to the server
    });
}
formValidation();