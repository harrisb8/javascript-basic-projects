const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
   //get random number between 0 - 3
   //set randomNumber equal to getRandomNumber function
   const randomNumber = getRandomNumber();
   console.log(randomNumber);

   //target body and style the backgroundColor set to randomNumber
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

//Create a function to generate a random number. 
//Multiplying by colors.length expands the number past 1 and less than the array
//Math floor round the number to a whole number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}