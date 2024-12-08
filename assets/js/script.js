const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

password.addEventListener("change", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Password do not match");
  }
});
