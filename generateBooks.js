import covers from "assets/images/*.png";
var cardCount = 20;
var title = [ "Farenheit 451", "Brave New World", "The Hitchiker's Guide to the Galaxy", "A Stitch in Time: This Book Does Not Have a Subtitle, but I Have Added One to Test Wrapping" ];
var author = [ "Ray Bradbury", "Aldous Huxley", "Douglas Adams", "Andrew Robinson, who played Garak on the hit TV series Star Trek: Deep Space 9" ];

console.log(covers);

for (var i = 1; i < cardCount; i++) {
    var nextCard = document.createElement('div');
    var nextCover = document.createElement('img');
    var nextTitle = document.createElement('div');
    var nextAuthor = document.createElement('div');

    var index = Math.floor(Math.random() * 4);

    nextCard.className = "bookshelf-card";
    nextCard.id = "bookshelf-card-" + i;

    nextCover.className = "bookshelf-card__coverimg";
    nextCover.id = "bookshelf-card-cover-" + i;
    nextCover.src = Object.values(covers)[index];
    nextCover.alt = title[index];
    

    nextTitle.innerHTML = title[index];
    nextTitle.className = "bookshelf-card__title";

    nextAuthor.innerHTML = author[index];
    nextAuthor.className = "bookshelf-card__author";


    document.getElementById("bookshelf__container").appendChild(nextCard);
    document.getElementById(nextCard.id).appendChild(nextCover);
    document.getElementById(nextCard.id).appendChild(nextTitle);
    document.getElementById(nextCard.id).appendChild(nextAuthor);
}