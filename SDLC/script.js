const box = document.getElementById('body');
const button = document.getElementById('button');

button.addEventListener('click', function(){
    let width = toString(box.style.width);
    console.log(width);
});