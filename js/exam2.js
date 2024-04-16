/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1
window.addEventListener("load", (event) => {
  console.log("Alyssa");
});


// Problem 2
window.addEventListener("click", () => {
  let h1 = document.querySelector('h1');
  h1.remove();
});


// Problem 3
window.addEventListener('dblclick', () => {
  imageElement.parentNode.removeChild(imageElement); 
});

// Problem 4
// Part 1

const element = document.getElementById('first');
const toggleColor = (isEntering) => {
  element.style.color = isEntering ? 'white' : 'blue';
  element.style.borderColor = isEntering ? 'white' : 'red';
};
element.addEventListener('mouseover', function(){
    toggleColor(true);
});
element.addEventListener('mouseout', function(){
  toggleColor(false);
});

// Problem 4
// Part 2



// Problem 5
const element = document.getElementById('first');
const toggleColor = (isEntering) => {
  element.style.color = isEntering ? 'black' : 'blue';
  element.style.borderColor = isEntering ? 'white' : 'red';
};
element.addEventListener('focus', function(){
    toggleColor(true);
});
element.addEventListener('focus', function(){
  toggleColor(false);
});



// Problem 6
const element = document.getElementById('second');
const toggleColor = (isEntering) => {
  element.style.fontFamily = isEntering ? 'Times' : 'Cursive';
};
element.addEventListener('focus', function(){
    toggleColor(true);
});
element.addEventListener('focus', function(){
  toggleColor(false);
});

// Problem 7





// Problem 8



// Problem 9
