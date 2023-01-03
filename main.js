let left = document.getElementsByClassName('bi bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi bi-caret-right-fill')[0];
let cards =document.getElementsByClassName('cards')[0];

left.addEventListener('click',() => {
    cards.scrollLeft -= 140;
})

right.addEventListener('click',() => {
    cards.scrollLeft += 140;
})

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price-cont');

Array.from(document.getElementsByClassName('card')).forEach((el,i) => {
    el.addEventListener('click', () => {
        poster.src = el.getElementsByTagName('img')[0].src;
        title.innerText = el.getElementsByTagName('h5')[0].innerText;
        price.innerText = el.getElementsByTagName('h4')[0].innerText;
    })
})