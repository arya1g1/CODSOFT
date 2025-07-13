document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("#signupForm input[required]");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      valid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (valid) {
    alert("Signup successful!");
    // Proceed with backend call here
  }
});
