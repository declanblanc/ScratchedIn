const exploreLink = document.querySelector(".link.explore");
if (exploreLink) {
  exploreLink.innerHTML = ``;
}

const siteBody = document.querySelector(".splash");
if (siteBody) {
  siteBody.innerHTML = ``;
}

const linkTwo = document.querySelector(".site-nav");
if (linkTwo) {
  linkTwo.innerHTML = `<li><a id="project-create" href="/projects/editor/">Create</a></li><li><a href="/mystuff">Explore</a></li><li><a href="/ideas">Ideas</a></li><li class="last"><a href="/about/">About</a></li>`;
}

const searchBar = document.querySelector(".col-sm-9");
if (searchBar) {
  searchBar.innerHTML = ``;
}

if (window.location.href.includes("search")) {
  const redirectUrl = "https://scratch.mit.edu/mystuff/"; 
  window.location.href = redirectUrl;
}

if (window.location.href.includes("explore")) {
  const redirectUrl = "https://scratch.mit.edu/mystuff/";
  window.location.href = redirectUrl;
}
