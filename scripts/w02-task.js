/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Cecilia Santos";
let currentYear = 2023;
var profilePicture = 'images/aboutme.jpg';
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const foodElement = document.getElementById('food');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picture of ${nameElement}`);
/* Step 5 - Array */
let foods = ["Chicken","Lasagna","Tortas","Potato fries"]
foodElement.innerHTML = `${foods}`;
let singleFood = "Churrasco";
foods.push(singleFood)
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`




