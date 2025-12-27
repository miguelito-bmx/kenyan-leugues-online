// ------------------------
// Step 7a: Admin Login
// ------------------------
const ADMIN_PASSWORD = "12345"; // change to your secure password

const loginBtn = document.getElementById("loginBtn");
const adminPass = document.getElementById("adminPass");
const adminContent = document.getElementById("adminContent");
const loginSection = document.getElementById("loginSection");

loginBtn.addEventListener("click", () => {
  if(adminPass.value === ADMIN_PASSWORD) {
    loginSection.style.display = "none";
    adminContent.style.display = "block";
  } else {
    alert("Wrong password!");
  }
});
