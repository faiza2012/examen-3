// ✅ Bon
import './src/assets/style.css';

import { greet } from './src/utils.js';

console.log(greet('Faiza'));

function loadPage(page) {
  fetch(`/src/pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
      setActiveLink(page);
    });
}

function setActiveLink(page) {
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
  });
});

loadPage("home");
