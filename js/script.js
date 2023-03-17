/*
` <div class="square">1</div>`
easy = 100
medium = 81
difficult = 49

square:
width: calc(100% / 10);
height: calc(100% / 10);
*/

const levelForm = document.getElementById('levelForm');
levelForm.addEventListener('submit', play);

// evento levelForm
function play(e) { 
    e.preventDefault();

    //prendo il livello
    const level = document.getElementById('level').value;
    console.log(level);

    // imposto il numero di celle a seconda del livello 
    let squareNumbers;
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'difficult':
            squareNumbers = 49;
            break;
    };
    console.log(squareNumbers);
};