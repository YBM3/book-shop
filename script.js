const body = document.querySelector('body');
const main = document.createElement('main');
const header = document.createElement('header');
const div = document.createElement('div');
const book_box = document.createElement('div');
const buy_book_box = document.createElement('div');
main.classList.add('main');
body.appendChild(header);
body.appendChild(main);

header.appendChild(div);
div.classList.add('header-title');
div.textContent = 'books';
div.innerHTML = '<h1>' + 'Welcome to amaizing book shop!' + '</h1>';

const data_copy = [];

function getBook(maxNum = 1) {
  fetch('db.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        data_copy.push(data[i]);
        const button = document.createElement('button');
        const img = document.createElement('img');
        const book_parts = document.createElement('div');
        const book_info = document.createElement('div');
        const book_title_price = document.createElement('div');
        const author = document.createElement('h2');
        const title = document.createElement('h1');
        const price = document.createElement('p');
        const book_btns = document.createElement('div');
        const show_more = document.createElement('button');
        const show_box = document.createElement('div');

        show_box.classList.add('show-box');
        show_more.innerText = 'Show more';
        show_more.classList.add('show-more');
        book_btns.classList.add('book-btn');
        price.innerText = 'Price: ' + data[i].price + '$';
        price.classList.add('price');
        title.innerText = data[i].title;
        title.classList.add('title');
        author.innerText = data[i].author;
        author.classList.add('author');
        book_title_price.classList.add('book-title-price');

        img.classList.add('book-img');
        book_info.classList.add('book-info');
        book_parts.classList.add('book-parts');
        main.appendChild(book_box);
        book_box.classList.add('books-for-sell');
        main.appendChild(buy_book_box);
        buy_book_box.classList.add('books-for-buy');

        button.classList.add('add_buy');
        button.innerText = 'ADD to bag';

        img.src = data[i].imageLink;

        (function (index) {
          show_more.addEventListener('click', function () {
            console.log('check-descrshi');
            const desc_box = document.createElement('div');
            const title = document.createElement('h4');
            const descr = document.createElement('p');

            desc_box.classList.add('desc-box');
            title.classList.add('title');
            descr.classList.add('descr');
            title.innerText = data_copy[index].title;
            descr.innerText = data_copy[index].description;
            show_box.appendChild(desc_box);
            desc_box.appendChild(title);
            desc_box.appendChild(descr);
            show_more.disabled = true;
          });
        })(i);

        book_box.appendChild(book_parts);
        book_parts.appendChild(img);
        book_parts.appendChild(book_info);
        book_info.appendChild(book_title_price);
        book_info.appendChild(show_box);
        book_title_price.appendChild(author);
        book_title_price.appendChild(title);
        book_title_price.appendChild(price);
        show_box.appendChild(book_btns);
        book_btns.appendChild(show_more);
        book_btns.appendChild(button);
      }
    });
}

getBook();
