const sec = document.querySelector('#container');
for(let i = 1; i <= 10; i++)
{
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/pokemon/${i}.png`;
    let Label = document.createElement('span');
    Label.innerText = `${i}`;
    div.appendChild(newImg);
    div.appendChild(Label);
    sec.appendChild(div);

}