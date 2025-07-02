function toggleForm(type) {
  const popup = document.getElementById("form-popup");
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");

  popup.classList.add("active");

  if (type === "login") {
    loginBox.classList.remove("hidden");
    registerBox.classList.add("hidden");
  } else {
    registerBox.classList.remove("hidden");
    loginBox.classList.add("hidden");
  }

  // Clear both forms' inputs
  clearFormInputs(loginBox);
  clearFormInputs(registerBox);
}

function closeForm() {
  const popup = document.getElementById("form-popup");
  popup.classList.remove("active");

  // Clear inputs when closing
  clearFormInputs(document.getElementById("login-box"));
  clearFormInputs(document.getElementById("register-box"));
}

function handleLogin(event) {
  event.preventDefault();
  alert("Login successful! Redirecting to home...");
  closeForm();
  window.location.href = "#home";
  return false;
}

function handleRegister(event) {
  event.preventDefault();
  alert("Registered successfully! Redirecting to home...");
  closeForm();
  window.location.href = "#home";
  return false;
}

function clearFormInputs(container) {
  const inputs = container.querySelectorAll("input, textarea");
  inputs.forEach(input => input.value = "");
}


function submitContactForm(event) {
  event.preventDefault();
  alert("Thanks! Your message has been sent.");
  event.target.reset();
  return false;
}
