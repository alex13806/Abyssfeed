// AbyssFeed Core Script
console.log("AbyssFeed is live.");

// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCk5KJU-AB4-x1kVKDzdMkplLoVZ5T6DWa4",
  authDomain: "abyssfeed-76e64.firebaseapp.com",
  projectId: "abyssfeed-76e64",
  storageBucket: "abyssfeed-76e64.appspot.com",
  messagingSenderId: "716784864941",
  appId: "1:716784864941:web:a2f441076d6acfc0fac02a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Dropdown menu behavior
document.querySelectorAll('.dropdown').forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    const submenu = menu.querySelector('.dropdown-menu');
    if (submenu) submenu.style.display = 'block';
  });

  menu.addEventListener('mouseleave', () => {
    const submenu = menu.querySelector('.dropdown-menu');
    if (submenu) submenu.style.display = 'none';
  });
});

// Login form logic
const loginForm = document.getElementById("login-form");
const loginMsg = document.getElementById("login-message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      loginMsg.textContent = `Welcome back, ${user.email}`;
      loginMsg.style.color = "lime";
      console.log("Login success:", user);
      loginForm.reset();
    })
    .catch((error) => {
      loginMsg.textContent = "Login failed: " + error.message;
      loginMsg.style.color = "crimson";
      console.error("Login error:", error);
    });
});