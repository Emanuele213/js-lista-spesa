const listArray = [
    'pane',
    'formaggio',
    'acqua',
    'pasta',
    'patatine',
    'succhi',
];

const listExpensive = document.querySelector('.list');
let i = 0;

while (i < listArray.length) {
    console.log(listArray[i]);
    listExpensive.innerHTML += `<li>${listArray[i]}</li>`;
    i++;
}