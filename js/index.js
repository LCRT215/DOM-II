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

// BUTTON CLICK

const btn = Array.from(document.getElementsByClassName("btn"));
//console.log(btn);

btn.forEach(btn => {
  btn.addEventListener("click", ev => {
    btn.style.color = "lightblue";
    btn.style.backgroundColor = "white";
  });
});

///////
// const stringArray = [
//   "I'm string 1",
//   "I'm string 2",
//   "I'm string 3",
//   "I'm string 4"
// ];
// stringArray.forEach((stringCurrentValue, stringIndex, stringArray) => {
//   console.log(
//     "I'm the string current value: ",
//     stringCurrentValue,
//     "\n",
//     "I'm the string current index: ",
//     stringIndex,
//     "\n",
//     "I'm the string array",
//     stringArray,
//     "\n"
//   );
// });

//DOUBLE CLICK IMG

const img = Array.from(document.getElementsByTagName("img"));
//console.log(img);

img.forEach(img => {
  img.addEventListener("dblclick", e => {
    img.style.border = "solid 2px blue";
  });
});

// P

const pText = Array.from(document.getElementsByTagName("p"));
console.log(pText);

pText.forEach(para => {
  para.addEventListener("mouseover");
});
