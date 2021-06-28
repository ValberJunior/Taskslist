

let title = document.getElementById('title');
title.addEventListener('mouseover', function(){
title.style.color='#000000b2'
})
title.addEventListener('mouseout', function(){
    title.style.color='#000000';
})

let h2 = document.getElementsByTagName('h2')[0];
h2.addEventListener('mouseover', function(){
h2.style.color='#000000b2'
})
h2.addEventListener('mouseout', function(){
    h2.style.color='#000000';
})

let start = document.getElementById('start');
start.addEventListener('mouseover', function(){
start.style.color='#FFFFFFdc';
start.style.backgroundColor='#1768ffec';
start.style.width='51%';
})

start.addEventListener('mouseout', function(){
    start.style.color='#FFFFFF';
    start.style.backgroundColor='#215ecfec';
    start.style.width='50%';

})
start.addEventListener('mouseout', function(){
    start.style.color='#FFFFFF';
    start.style.backgroundColor='#2f6fe6ec';

})