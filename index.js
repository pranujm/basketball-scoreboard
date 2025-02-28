let homeScoreButton1 = document.getElementById("home-button1")
let homeScoreButton2 = document.getElementById("home-button2")
let homeScoreButton3 = document.getElementById("home-button3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let awayScoreButton1 = document.getElementById("away-button1")
let awayScoreButton2 = document.getElementById("away-button2")
let awayScoreButton3 = document.getElementById("away-button3")
let awayScoreEl = document.getElementById("away-score")
let awayScore = 0

function homeScorePlusOne() {
    
    homeScoreEl.textContent = homeScore += 1
}

function homeScorePlusTwo() {
    
    homeScoreEl.textContent = homeScore += 2
}

function homeScorePlusThree() {
    
    homeScoreEl.textContent = homeScore += 3
}

function awayScorePlusOne() {
    
    awayScoreEl.textContent = awayScore += 1
}

function awayScorePlusTwo() {
    
    awayScoreEl.textContent = awayScore += 2
}

function awayScorePlusThree() {
    
    awayScoreEl.textContent = awayScore += 3
}
