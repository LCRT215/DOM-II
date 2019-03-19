// Your code goes here
//NAV CLICK
const navText = Array.from(document.getElementsByClassName("nav-link"));
// console.log(navText);

// navText[0].addEventListener("click", ev => {
//   console.log("nav clicked");
// });
navText.forEach(link => {
  link.addEventListener("click", ev => {
    link.style.color = "lightblue";
  });
});

// IMG FOCUS

const btn = Array.from(document.getElementsByClassName("btn"));
console.log(btn);

btn.forEach(btn => {
  btn.addEventListener("click", ev => {
    btn.style.color = "lightblue";
    btn.style.backgroundColor = "white";
  });
});
