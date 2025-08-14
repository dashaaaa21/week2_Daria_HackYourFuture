const listOfBooks = [
    {
        title: 'Hack Daria Future',
        author: 'Daryna Tkachenko',
        alreadyRead: true
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: true
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        alreadyRead: false
    }
];

for (const book of listOfBooks) {
    if (book.alreadyRead) {
        console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
    } else {
        console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
    }
}
