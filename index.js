let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeResult = 0;
let guestResult = 0;


// FUNCTIONS FOR HOME SCORE
function add1home() {
    homeResult += 1;
    homeScore.innerText = homeResult;
}

function add2home() {
    homeResult += 2;
    homeScore.innerText = homeResult;
}

function add3home() {
    homeResult += 3;
    homeScore.innerText = homeResult;
}

// FUNCTIONS FOR GUEST SCORE
function add1guest() {
    guestResult += 1;
    guestScore.innerText = guestResult;
}

function add2guest() {
    guestResult += 2;
    guestScore.innerText = guestResult;
}

function add3guest() {
    guestResult += 3;
    guestScore.innerText = guestResult;
}

// RESET BUTTON
function reset() {
    homeResult = 0;
    guestResult = 0 
    homeScore.innerText = homeResult;
    guestScore.innerText = guestResult;
}