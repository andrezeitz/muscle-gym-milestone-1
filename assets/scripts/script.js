// I learned how to make the nav-bar burger menu from this tutorial from https://www.youtube.com/watch?v=At4B7A4GOPg

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const allNavbarLinks = document.getElementsByClassName('nav-link')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

for (let i = 0; i < allNavbarLinks.length; i++) {
  allNavbarLinks[i].addEventListener("click", () => {
  console.log("clicked");
  toggleButton.click();
  })
}
