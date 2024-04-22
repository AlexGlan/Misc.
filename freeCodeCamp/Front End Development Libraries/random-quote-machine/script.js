const API_ENDPOINT = 'https://api.quotable.io/quotes/random?maxLength=250&limit=50';
let quotes = [];

function getColor() {
    const r = Math.floor(Math.random() * 45 + 1);
    const g = Math.floor(Math.random() * 45 + 1);
    const b = Math.floor(Math.random() * 45 + 1);    
    return `rgb(${r}% ${g}% ${b}% / 80%)`;
}

function fetchQuotes() {
    return $.get(API_ENDPOINT, function(data) {
        quotes = [...data];
    });       
}

function showQuote() {
    const color = getColor(); 
    const { content,  author, tags } = quotes.pop();
    
    $('body, a, #new-quote').css('background-color', color);        
    $('.quote-icon, p, span')            
        .css('color', color)
        .animate({opacity: 0}, 500, function() {
            $(this).animate({opacity: 1}, 500);
            $('#text').text(content);
            $('#author').text('-' + author);
        });
    $('#tweet-quote').attr(
        'href',
        `https://twitter.com/intent/tweet?text="${encodeURIComponent(content)} -${encodeURIComponent(author)}"`
    );
    $('#tumblr-quote').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote' +
        `&tags=quote,quotes,${tags.map(tag => tag.toLowerCase()).join(',')}` +
        `&content="${encodeURIComponent(content)} -${encodeURIComponent(author)}"` +
        `&canonicalUrl=${encodeURIComponent('https://www.tumblr.com')}`
    );
}

$(document).ready(function() {
    $('#new-quote').on('click', function() {
        if (quotes.length === 0) {
            fetchQuotes().then(showQuote);
        } else {
            showQuote();
        }
    });
    fetchQuotes().then(showQuote);
});