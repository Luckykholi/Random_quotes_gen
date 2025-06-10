

let button = document.getElementById("click");
let quote_text = document.querySelector(".quote-text")
let author = document.querySelector(".author")



 let Quotes = {

        "—Thomas Henry Huxley " : "Sit down before fact as a little child, be prepared to give up every preconceived notion, follow humbly wherever and whatever abysses nature leads, or you will learn nothing.", 

        "—Albert Einstein " : "A person who never made a mistake never tried anything new.",

        "—Isaac Asimov " : "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",

        "—Carl Sagan " : "Somewhere, something incredible is waiting to be known.",

        "—Richard Feynman " : "The first principle is that you must not fool yourself – and you are the easiest person to fool.",

        "—Marie Curie " : "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",

        "—Niels Bohr " : "An expert is a person who has made all the mistakes that can be made in a very narrow field.",

        "—Stephen Hawking " : "Intelligence is the ability to adapt to change.",

        "—Galileo Galilei " : "All truths are easy to understand once they are discovered; the point is to discover them.",

        "—Ada Lovelace " : "That brain of mine is something more than merely mortal; as time will show.",

        "—James Clerk Maxwell " : "Thoroughly conscious ignorance is the prelude to every real advance in science.",
    }

button.addEventListener("click", function() {
    let authors = Object.keys(Quotes);
    let randomIndex = Math.floor(Math.random() * authors.length);
    let randomAutho  = authors[randomIndex];
    let randomQuote = Quotes[randomAutho]

    quote_text.textContent = randomQuote;
    author.textContent = randomAutho;
})