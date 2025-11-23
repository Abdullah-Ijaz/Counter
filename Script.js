// Improved Counter App Script
// Provides cleaner logic, strict comparisons, and unified update functions.

const counter = document.querySelector('.counter');
const addCountBtn = document.querySelector('#addCountBtn');
const lowerCountBtn = document.querySelector('#lowerCountBtn');
const actionBtn = document.querySelector('button');

let count = 0;

// Initialize counter display
updateCounterDisplay();

addCountBtn.addEventListener('click', () => {
    count++;
    updateCounterDisplay();
});

lowerCountBtn.addEventListener('click', () => {
    count--;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counter.textContent = count;

    // Color logic
    if (count > 0) {
        counter.style.color = '#4caf50'; // green
    } else if (count < 0) {
        counter.style.color = 'orange';
    } else {
        counter.style.color = 'white';
    }

    // Enable/disable button depending on count
    actionBtn.disabled = count === 0;
}

    //(Note to self:: https://www.google.com/search?q=abling+a+disabled+button+using+javascript&rlz=1C1CHBF_enUS895US895&oq=abling+a+disabled+button+using+javascript&aqs=chrome..69i57j0l6.32383j1j4&sourceid=chrome&ie=UTF-8)
    //here we remove the d none tag which was keeping HTML from showing the text of review. Reference Index.HTML for that. we have above just refernced the button named See-review. It was then given an event listener which has a class which contained the d-none. We made conditionals that if the d-none is active, or if the event we are listening for our click, JS is checking if it contains d-none and then removing it with the remove () and then writing or giving the button the desired text-content. Now the d-none class is no longer active which is our else block and since button is still in scope, we use it to change the text-content again and back to See Review.
