/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "Edwards Lee";
const currentYear = new Date().getFullYear();
const profilePicture = "images/me.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.innerHTML = `<strong>${currentYear}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute = `<strong>"Profile Image of ${profilePicture}"</strong.`;



/* Step 5 - Array */
let foodArray = ["sushi", "pad thai", "fried rice"];
foodElement.textContent = foodArray;
let anotherfood = "eggrolls";
foodArray.push(anotherfood);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;







