let change = document.querySelector('button');

function dodo () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    document.querySelector('h1').innerText = `rgb(${r},${g},${b})`;
    let newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
}

change.addEventListener('click', dodo );
