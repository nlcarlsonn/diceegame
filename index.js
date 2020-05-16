var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var leftImage = "images/dice" + randomNumber1 + ".png";
var rightImage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", leftImage);
document.querySelectorAll("img")[1].setAttribute("src", rightImage);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎈 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎈";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}


// Norbel's solution for generating randomImages
// uncomment to get full solution
// let getRandomImage = function () {
//     var n = Math.random();
//     var randomNumber = Math.floor(n * 6);
   
//     console.log(randomNumber);
//     var myPhotos = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
//     var randomPhoto = myPhotos[randomNumber];
//     console.log(randomPhoto);
//     return randomPhoto;
// };
// document.querySelectorAll("img").forEach(element => {
//     element.setAttribute('src', getRandomImage());
// });