const suits = ["♥", "♦", "♠", "♣"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const numberTopElement = document.querySelector(".numbers-top");
const suitsElement = document.querySelector(".suits");
const numberBottomElement = document.querySelector(".numbers-bottom");

const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

numberTopElement.innerText = randomNumber;
suitsElement.innerText = randomSuit;
numberBottomElement.innerText = randomNumber;

if (randomSuit === "♥" || randomSuit === "♦") {
    numberTopElement.style.color = "red";
    numberBottomElement.style.color = "red";
    suitsElement.style.color = "red";
} else {
    numberTopElement.style.color = "black";
    numberBottomElement.style.color = "black";
    suitsElement.style.color = "black";
}

