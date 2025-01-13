let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.addEventListener('click', ()=>{
    searchBox.classList.add('active');
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
})
closeBtn.addEventListener('click', ()=>{
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
})