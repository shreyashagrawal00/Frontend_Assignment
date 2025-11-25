const form = document.getElementById("regForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        valid = false;
      } else {
        nameError.textContent = "";
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
      }

      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("invalid");
        valid = false;
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        emailInput.classList.add("invalid");
        valid = false;
      } else {
        emailError.textContent = "";
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
      }

      if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.add("invalid");
        valid = false;
      } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("invalid");
        valid = false;
      } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
      }

      if (valid) {
        alert("Registration Successful!");
      }
    });