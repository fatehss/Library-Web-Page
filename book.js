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

let myLibrary = [];
const openAddBookPopup = document.getElementById('add-book');
const closeAddBookPopup = document.getElementById('close-popup');
const submitBook = document.getElementById('submit-book');
const libraryInterface = document.getElementById('library-interface');

//To open the popup
openAddBookPopup.addEventListener("click", function(){

    let forms = document.getElementsByTagName('input'); //clear old inputs in forms
    for (let i =0; i<forms.length; ++i){
        forms[i].value = '';
        if (forms[i].getAttribute("type") === 'checkbox'){forms[i].checked = false;}
    }

    document.getElementById('add-book-popup').style.visibility= "visible";
    document.getElementById('add-book-popup').style.opacity= "1";
});
//To close the popup
closeAddBookPopup.addEventListener("click", function(){
    document.getElementById('add-book-popup').style.visibility= "hidden";
    document.getElementById('add-book-popup').style.opacity= "0";

})
//To submit a book





function newBookFromInput(){
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("book-pages").value;
    const read = document.getElementById("book-read").checked;

    if (title == null || title == ""){
        alert('Please enter a title for the book!')
        return 0;
    }
    else if (author == null || author == ""){
        alert('Please enter an author for the book!')
        return 0;
    }
    else if (pages == "" || pages<=0 || pages> 50000){
        alert('Please enter a valid number of pages! (1-50000');
        return 0;
    }
    console.log(title);
    console.log(author);
    console.log(pages);
    
    document.getElementById('add-book-popup').style.visibility= "hidden";
    document.getElementById('add-book-popup').style.opacity= "0";
    myLibrary.push(new Book(title, author, pages, read));
    addBookToLibrary(myLibrary[myLibrary.length-1]);

}

//in this function we need to add the book to library and also display it properly
function addBookToLibrary(book){

    let newBookDiv = document.createElement("div");
    newBookDiv.classList.add('book-div');
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let hasRead = document.createElement('button');
    let removeBook = document.createElement('button');

    title.textContent = book.title;
    author.textContent = "Author: " +book.author;
    pages.textContent = book.pages + " pages";
    removeBook.textContent = "Remove"

    newBookDiv.append(title);
    newBookDiv.append(author);
    newBookDiv.append(pages);
    newBookDiv.append(hasRead);
    newBookDiv.append(removeBook);

    libraryInterface.append(newBookDiv);

    if (book.read === true){
        hasRead.setAttribute('readStatus', 'read');
        hasRead.textContent = "Read";}
    else{ 
        hasRead.setAttribute('readStatus' , 'unread');
        hasRead.textContent = "Not read yet";}

   hasRead.addEventListener('click',function(e){
        let btn = e.target;
        if (btn.getAttribute('readStatus')== "unread"){
            btn.textContent ="Read";
            btn.setAttribute('readStatus','read');
        }
        else{
            btn.textContent ="Not read yet";
            btn.setAttribute('readStatus','unread');
        }
    })

    removeBook.addEventListener('click',function(e){
        e.target.parentElement.remove();
    })



}





//////////Test books

let book0 = new Book('testing','addakjfdlakjsdflkajhsdfjsajkkkkkkkkkkallllllkjafdfkjahsfklaskajsfdkjlhasf',243,true);
addBookToLibrary(book0);

let book1 = new Book('testing','addkalllljhasf',243,true);
addBookToLibrary(book1);
let book2 = new Book('testing','addakjfdlakjsdflkajhsdfjsajkkkkkkkkkkallllllkjafdfkjahsfklaskajsfdkjlhasf',243,true);
addBookToLibrary(book2);

let book3 = new Book('testing','addkalllljhasf',243,true);
addBookToLibrary(book3);
let book4 = new Book('testing','addakjfdlakjsdflkajhsdfjsajkkkkkkkkkkallllllkjafdfkjahsfklaskajsfdkjlhasf',243,true);
addBookToLibrary(book4);

let book5 = new Book('testing','addkalllljhasf',243,true);
addBookToLibrary(book5);

