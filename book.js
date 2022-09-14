
const addBook = document.getElementById('add-book');

function fun (){console.log('hello world!')};
addBook.addEventListener("click", fun);





function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    (typeof(pages=== 'number'))? (this.pages = pages): (this.pages = false);
    (typeof(read === 'boolean'))? (this.read = read): (this.read = false);
        
    this.info = function(){
        let str = title + ' by '+author+', '+pages+' pages';
        (read === false)? str = str+', not read yet.': str = str+ ', read already.';
        return str;
    }
}

let mylibrary = [];




