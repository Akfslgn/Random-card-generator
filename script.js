// Random Card Generator Arrays 
const suits = ["♥", "♦", "♠", "♣"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

// Select elements
const numberTopElement = document.querySelector(".numbers-top");
const suitsElement = document.querySelector(".suits");
const numberBottomElement = document.querySelector(".numbers-bottom");

// Generate random values
const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

// Display random values
numberTopElement.innerText = randomNumber;
suitsElement.innerText = randomSuit;
numberBottomElement.innerText = randomNumber;

// Colorization
const randomColor = document.querySelector(".card");
randomColor.style.color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";

// Alternative Way - Colorization

// if (randomSuit === "♥" || randomSuit === "♦") {
//     numberTopElement.style.color = "red";
//     numberBottomElement.style.color = "red";
//     suitsElement.style.color = "red";
// } else {
//     numberTopElement.style.color = "black";
//     numberBottomElement.style.color = "black";
//     suitsElement.style.color = "black";
// }










