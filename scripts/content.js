// Locate the navbar link for the explore page and remove it.
const exploreLink = document.querySelector(".link.explore");
if (exploreLink) {
  exploreLink.innerHTML = ``;
}

// Removes most of the content on the main page where you can find links to other games.
const siteBody = document.querySelector(".splash");
if (siteBody) {
  siteBody.innerHTML = ``;
}

// Removes the search bar that enables searching for games
const searchBar = document.querySelector(".col-sm-9");
if (searchBar) {
  searchBar.innerHTML = ``;
}

// If students navigate to the explore page from an external link, redirect them to their projects
if (window.location.href.includes("search") || window.location.href.includes("explore")) {
  const redirectUrl = "https://scratch.mit.edu/mystuff/"; 
  window.location.href = redirectUrl;
}
