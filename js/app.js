//nav Background Change

window.addEventListener('scroll',function(){
    let nav = document.querySelector("nav");
    let win = window.scrollY > 400;
    nav.classList.toggle('back-nav-chang',win)
})


window.addEventListener('scroll',function(){
    let sec2 = document.querySelector(".sec-2");
    let win = window.scrollY > 300;
    sec2.classList.toggle('sec-2-2-2',win)
})


window.addEventListener('scroll',function(){
    let sec3 = document.querySelector(".sec-3");
    let win = window.scrollY > 500;
    sec3.classList.toggle('sec-3-3-3',win)
})



window.addEventListener('scroll',function(){
    let sec4 = document.querySelector(".sec-4");
    let win = window.scrollY > 1200;
    sec4.classList.toggle('sec-4-4-4',win)
})



window.addEventListener('scroll',function(){
    let sec5 = document.querySelector(".sec-5");
    let win = window.scrollY > 1900;
    sec5.classList.toggle('sec-5-5-5',win)
})