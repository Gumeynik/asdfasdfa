// const greyBtn = document.querySelector('#grey');
// const whiteBtn = document.querySelector('#white');
// const blueBtn = document.querySelector('#blue');
// const yellowBtn = document.querySelector('#yellow');
// const div = document.querySelector('.div');
// const body = document.querySelector('body');
// const buttons = document.querySelectorAll('.button');
 
// console.log(buttons)

// buttons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         if (event.target.id==='grey') {
//             body.style.backgroundColor = event.target.id
//         } else if (event.target.id==='white') {
//             body.style.backgroundColor = event.target.id
//         }
//         else if (event.target.id==='blue') {
//             body.style.backgroundColor = event.target.id
//         }
//         else {
//             body.style.backgroundColor = event.target.id
//         }
//     })
// });--------------------
// const weekDay = document.querySelector('#weekday');
// const phrase = document.querySelector('#phrase')
// const date = new Date();
// const day = date.getDay();
// let quote;
// let nameOfDay;
// switch (day) {
//     case 0:
//         nameOfDay='Sunday';
//         quote='time to chill';
//         break;
//     case 1:
//         nameOfDay='Monday';
//         quote='time to work';
//         break;
//     case 2:
//         nameOfDay='Tuesday';
//         quote='time to ice-cream';
//         break;
//     case 3:
//         nameOfDay='Wednesday';
//         quote='time to gym';
//         break;
//     case 4:
//         nameOfDay='Thursday';
//         quote='time to wait for friday';
//         break; 
//     case 5:
//         nameOfDay='Friday';
//         quote='time to whiskay';
//         break;
//     case 6:
//         nameOfDay='Saturday';
//         quote='time to beer';
//         break;
// }
// weekDay.innerHTML = `${nameOfDay}`;
// phrase.innerHTML = `${quote}`
const primeNumber = document.querySelector('#primary-number');
const secondaryNumber = document.querySelector('#secondary-number');
const checkBtn = document.querySelector('#btn');
const guessInput = document.querySelector('#guess');
let firstNumber = parseInt( Math.random()*10);
let secondNumber = parseInt( Math.random()*10);
let total = firstNumber+secondNumber;

primeNumber.innerHTML = `<p> ${firstNumber}</p>`
secondaryNumber.innerHTML = `<p> ${secondNumber}</p>`

checkBtn.addEventListener('click',() => {
    const answer = parseInt(guessInput.value);
    if ( answer === total) {
    checkBtn.innerHTML = 'correctly';
    checkBtn.style.background='green';
    setTimeout('location.reload()', 1000)
} else {
    checkBtn.innerHTML = 'wrong';
    checkBtn.style.background='red';
    guessInput.addEventListener('click', () => {
        guessInput.value = '';
        }
        )
}
}
);



