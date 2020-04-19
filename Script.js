let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');

const lowerCount = document.querySelector('#lowerCountBtn');

const button = document.querySelector('button');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);


function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = '#4caf50';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
}
function decrementCounter() {
    count --;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'orange';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
}

function ableButton(){ 
    if (counter.innerHTML === 0) {
        button.disabled = true;
    }
    else if (counter.innerHTML > 0) {
        button.disabled = false;
    }
}
    //(check this:  https://www.google.com/search?q=abling+a+disabled+button+using+javascript&rlz=1C1CHBF_enUS895US895&oq=abling+a+disabled+button+using+javascript&aqs=chrome..69i57j0l6.32383j1j4&sourceid=chrome&ie=UTF-8)
    //here we remove the d none tag which was keeping HTML from showing the text of review. Reference Index.HTML for that. we have above just refernced the button named See-review. It was then given an event listener which has a class which contained the d-none. We made conditionals that if the d-none is active, or if the event we are listening for our click, JS is checking if it contains d-none and then removing it with the remove () and then writing or giving the button the desired text-content. Now the d-none class is no longer active which is our else block and since button is still in scope, we use it to change the text-content again and back to See Review.
