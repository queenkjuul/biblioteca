import covers from "assets/images/*.png";
var cardCount = 19;
var title = [ "Farenheit 451", "Brave New World", "The Hitchiker's Guide to the Galaxy", "A Stitch in Time: This Book Does Not Have a Subtitle, but I Have Added One to Test Wrapping" ];
var author = [ "Ray Bradbury", "Aldous Huxley", "Douglas Adams", "Andrew Robinson, who played Garak on the hit TV series Star Trek: Deep Space 9" ];

console.log(covers);

for (var i = 1; i <= cardCount; i++) {
    var index = Math.floor(Math.random() * title.length);
    const newCard = {
        title: title[index],
        author: author[index],
        id: i,
        cover: Object.values(covers)[index]
    }

    createBookshelfCard(newCard);
}

function createBookshelfCard(card){

    const cardHTML = `

        <a href="details.html" class="card--bookshelf" id="card--bookshelf-${card.id}">
            <img class="card--bookshelf__coverimg" src="${card.cover}" alt="Cover of the book ${card.title}">
            <div class="card--bookshelf__title">${card.title}</div>
            <div class="card--bookshelf__author">${card.author}</div>
        </a>
`
    document.getElementById('bookshelf__container').insertAdjacentHTML('beforeend', cardHTML);
}