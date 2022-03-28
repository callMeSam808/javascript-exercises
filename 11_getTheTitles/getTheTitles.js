const getTheTitles = function(books) {
    let bookTitles = [];
    books.forEach(book => {
        let title = book.title;
        bookTitles.push(title);
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
