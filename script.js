 btnSub = document.querySelector('#btnSubmit');
btnRes = document.querySelector('#btnReset');

let title = document.querySelector('#nome-imagem');
let desc = document.querySelector('#descricao');
let image = document.querySelector('#url');
let cardGrid = document.querySelector('#card-grid');
let box = document.querySelector('#checkbox');

btnSub.addEventListener('click', (load) => {

let card = document.createElement('div');
let cardTitle = document.createElement('h2');
let divImg = document.createElement('div');
let img = document.createElement('img');
let cardParagraph = document.createElement('p');

card.setAttribute('class', 'card');


    let options = [];

    let choice = document.getElementsByName('position');
    for (var i=0; i<choice.length; i++) {
        if ( choice[i].checked ) {
        options.push(choice[i].value);
            }
        };

cardTitle.innerText = title.value + ` - ${options[0]}`;
img.setAttribute('src',image.value);
cardParagraph.innerText = desc.value;

if(title.value == "" || image.value == "" || desc.value == "" || options[0] == undefined) {
        alert('Por favor, preencha todos os campos para participar.')
        }
        
else{

    if(box.checked == true){
        img.style.border = '1px solid orange';
        cardTitle.style.color = 'orange';
        cardParagraph.style.color = 'white';
        cardGrid.appendChild(card);
        divImg.appendChild(img);
        card.appendChild(divImg);
        card.appendChild(cardTitle);
        card.appendChild(cardParagraph);
    }
    else{
        cardGrid.appendChild(card);
        divImg.appendChild(img);
        card.appendChild(divImg);
        card.appendChild(cardTitle);
        card.appendChild(cardParagraph);
    }
}
   
    load.preventDefault();
});

btnRes.addEventListener('click', reset =>{

    let last = document.getElementById('card-grid');

    last.removeChild(last.lastChild);
}
)

