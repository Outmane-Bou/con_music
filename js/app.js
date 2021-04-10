const iframe = document.querySelector(".iframe")
const liS = document.querySelectorAll(".li-s")

const ve = [
    "https://www.youtube.com/embed/WPni755-Krg",
    "https://www.youtube.com/embed/sAcj8me7wGI",
    "https://www.youtube.com/embed/hj83cwfOF3Y",
    "https://www.youtube.com/embed/j4OuCMnY43E",
    "https://www.youtube.com/embed/QKUNo8MOzQA",
    "https://www.youtube.com/embed/bP9gMpl1gyQ",
    "https://www.youtube.com/embed/6a-FnIqM0rI",
    "https://www.youtube.com/embed/7gPOwt2gmrg",

];

//iframe.src = ve[2];

liS[0].addEventListener('click', function(){
    iframe.src = ve[0];
})
liS[1].addEventListener('click', function(){
    iframe.src = ve[1];
})
liS[2].addEventListener('click', function(){
    iframe.src = ve[2];
})
liS[3].addEventListener('click', function(){
    iframe.src = ve[3];
})
liS[4].addEventListener('click', function(){
    iframe.src = ve[4];
})
liS[5].addEventListener('click', function(){
    iframe.src = ve[5];
})
liS[6].addEventListener('click', function(){
    iframe.src = ve[6];
})
liS[7].addEventListener('click', function(){
    iframe.src = ve[7]; 
})
