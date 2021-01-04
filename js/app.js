//nav-Background-Change

window.addEventListener('scroll',function(){
    let nav = document.querySelector("nav");
    let win = window.scrollY > 400;
    nav.classList.toggle('back-nav-chang',win)
})


window.addEventListener('scroll',function(){
    let sec2 = document.querySelector(".item-1");
    let win = window.scrollY > 300;
    sec2.classList.toggle('sec-2-2-1',win)
})


//Sec-2-Animation-Start

window.addEventListener('scroll',function(){
    let sec2 = document.querySelector(".item-2");
    let win = window.scrollY > 300;
    sec2.classList.toggle('sec-2-2-2',win)
})

window.addEventListener('scroll',function(){
    let sec2 = document.querySelector(".item-3");
    let win = window.scrollY > 300;
    sec2.classList.toggle('sec-2-2-3',win)
})


window.addEventListener('scroll',function(){
    let sec2 = document.querySelector(".item-4");
    let win = window.scrollY > 300;
    sec2.classList.toggle('sec-2-2-4',win)
})

//Sec-3-Animation-End


//Sec-3-Animation-Start

window.addEventListener('scroll',function(){
    let sec3 = document.querySelector('.items-1-sec-3');
    let win = window.scrollY > 500;
    sec3.classList.toggle('sec-3-3-1-1',win)
})



window.addEventListener('scroll',function(){
    let sec3 = document.querySelector('.items-1-sec-3-2');
    let win = window.scrollY > 500;
    sec3.classList.toggle('sec-3-3-2-2',win)
})



window.addEventListener('scroll',function(){
    let sec3 = document.querySelector('.items-1-sec-3-3');
    let win = window.scrollY > 500;
    sec3.classList.toggle('sec-3-3-3-3',win)
})

//Sec-3-Animation-End




//Sec-4-Animation-Start


window.addEventListener('scroll',function(){
    let sec4 = document.querySelector('.content-1');
    let win = window.scrollY > 1200;
    sec4.classList.toggle('sec-4-4-1',win)
})


window.addEventListener('scroll',function(){
    let sec4 = document.querySelector('.special-img-1');
    let win = window.scrollY > 1200;
    sec4.classList.toggle('sec-4-4-2',win)
})


window.addEventListener('scroll',function(){
    let sec4 = document.querySelector('.special-img-2');
    let win = window.scrollY > 1200;
    sec4.classList.toggle('sec-4-4-3',win)
})

//Sec-4-Animation-End


//Sec-5-Animation-Start

window.addEventListener('scroll',function(){
    let sec5 = document.querySelector('.sec-5-content');
    let win = window.scrollY > 1900;
    sec5.classList.toggle('sec-5-5-1',win)
})



window.addEventListener('scroll',function(){
    let sec5 = document.querySelector('.sec-5-img');
    let win = window.scrollY > 1900;
    sec5.classList.toggle('sec-5-5-2',win)
})

//Sec-5-Animation-End
