class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name=name;
        this.releaseDate=releaseDate;
        this.pagesCount=pagesCount;
        this.state=100;
        this.type =null;
}

fix(){
  this.state = this.state*1.5;
};

set state(state){
    if (state<0){
        this._state=0;
    } else if (state>100){
        this._state=100;
    } else {
        this._state=state;
    }
 };

 get state(){
    return this._state;
 };

};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type="magazine";
    };
};

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author=author;
        this.type="book";
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type="novel";
    };
};
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type="fantastic";
    };
};  

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type="detective";
    };
};  

class Library {
    constructor(name){
        this.name=name;
        this.books=[];
    };

    addBook(book){
        if (book.state>30){
            this.books.push(book);
        };
    };

    findBookBy(type, value){
        let result = this.books.find(book => book[type]===value);
        return result=== undefined ? null : result;
    };

    giveBookByName(bookName){
        let index = this.books.findIndex(book => book.name===bookName);
        let result= null;
        if (index >= 0) {
            result = this.books[index];
            this.books.splice(index,1);      
        };
        return result;
    };

};

// Тестовый сценарий:

let centralLibrary = new Library("Библиотека");
centralLibrary.addBook(new NovelBook("В.И.Ульнов","Жизнь Ленина", 1919, 150));
centralLibrary.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
centralLibrary.addBook(new Magazine("Мурзилка", 1924, 60));
centralLibrary.addBook(new FantasticBook("А и Б Стругацкие","Пикник на обочине", 1972, 168));
console.log("Нашли книгу 1919 года "+ centralLibrary.findBookBy("releaseDate", 1919).name + " В библиотеке есть " + centralLibrary.books.length+ " книг"); 

let libBook=centralLibrary.giveBookByName("Машина времени");
console.log("Получили книгу " + libBook.name + "В библиотеке осталось " + centralLibrary.books.length+ " книг");
libBook.state=30;
console.log("Повредили книгу " + libBook.name + " ее состоние " + libBook.state);
libBook.fix();
console.log("Починили книгу " + libBook.name + " ее состоние " + libBook.state);
centralLibrary.addBook(libBook);
console.log("Сдали книгу " + libBook.name + " В библиотеке снова " + centralLibrary.books.length+ " книг");