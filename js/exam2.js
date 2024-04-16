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
document.getElementById('first').onmouseover = function() {
  this.style.color = 'blue';
  this.style.borderColor = 'red';
});

// Problem 4
// Part 2



// Problem 5
document.getElementById('first').focus = function() {
  this.style.color = 'blue';
  this.style.borderColor = 'red';
});


// Problem 6
document.addEventListener('DOMContentLoaded', function() {
    const secondCaption = document.querySelectorAll('figcaption')[1];

    function changeFontOnFocus() {
        secondCaption.style.fontFamily = 'Cursive';
    }

    function restoreFontOnBlur() {
        secondCaption.style.fontFamily = 'Times';
    }

    secondCaption.addEventListener('focus', changeFontOnFocus);
    secondCaption.addEventListener('blur', restoreFontOnBlur);
});


// Problem 7
document.addEventListener('DOMContentLoaded', function() {
    const styleParentButton = document.getElementById('styleParentButton');

    function styleParent() {
        const figures = document.querySelectorAll('figure');
        
        figures.forEach(figure => {
            const parent = figure.parentElement;

            parent.classList.toggle('one-third');

            if (parent.style.backgroundImage.includes('Purple-Haze.jpg')) {
                parent.style.backgroundImage = '';
            } else {
                parent.style.backgroundImage = "url('Purple-Haze.jpg')";
            }
        });
    }
    styleParentButton.addEventListener('click', styleParent);
});





// Problem 8
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('styleButton');
    const lastImage = document.getElementById('last-image');

    function togglePizazz() {
        lastImage.classList.toggle('Pizazz');
    }

    button.addEventListener('click', togglePizazz);
});



// Problem 9
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    function logAltText(event) {
        console.log(event.target.alt || "No ALT");
    }
    images.forEach(image => {
        image.addEventListener('click', logAltText);
    });
});
