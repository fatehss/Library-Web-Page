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

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);

console.log(theHobbit.info());

