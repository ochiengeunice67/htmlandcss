function greetingMessage() {
  // Get the current hour
  const currentTime = new Date().getHours();

  //select the greeting element
  const greetingElement = document.getElementById("greeting");

  // Set the appropriate greeting based on the time
  if (currentTime >= 5 && currentTime < 12) {
    greetingElement.textContent = "Good morning!, Welcome to my Website";
  } else if (currentTime >= 12 && currentTime < 16) {
    greetingElement.textContent = "Good afternoon!, Welcome to my Website";
  } else if (currentTime >= 16 && currentTime <= 23) {
    greetingElement.textContent = "Good evening!, Welcome to my Website";
  } else {
    greetingElement.textContent = "Good night!, Welcome to my Website";
  }
}
greetingMessage();


