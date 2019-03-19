// Your code goes here
const navText = Array.from(document.getElementsByClassName("nav-link"));
console.log(navText);

// navText[0].addEventListener("click", ev => {
//   console.log("nav clicked");
// });

navText.forEach(link => {
  link.addEventListener("click", ev => {
    link.style.color = "lightblue";
  });
});
