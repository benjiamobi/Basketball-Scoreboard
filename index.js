let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

function homeOneBtn() {
    homeCount += 1
    homeScore.innerText=homeCount
    if (homeCount > guestCount) {
        homeScore.className = "leader"
        guestScore.className = 'score'
    } else if (homeCount < guestCount) {
        homeScore.className = 'score'
        guestScore.className = 'leader'
    }
    else {
        homeScore.className += "score"
    }
}
function homeTwoBtn() {
    homeCount += 2
    homeScore.innerText=homeCount
    if (homeCount > guestCount) {
        homeScore.className = "leader"
        guestScore.className = 'score'
    } else if (homeCount < guestCount) {
        homeScore.className = 'score'
        guestScore.className = 'leader'
    }
    else {
        homeScore.className += "score"
    }
}
function homeThreeBtn() {
    homeCount += 3
    homeScore.innerText=homeCount
    if (homeCount > guestCount) {
        homeScore.className = "leader"
        guestScore.className = 'score'
    } else if (homeCount < guestCount) {
        homeScore.className = 'score'
        guestScore.className = 'leader'
    }
    else {
        homeScore.className = "score"
        guestScore.className = 'score'
    }
}
function guestOneBtn() {
    guestCount += 1
    guestScore.innerText=guestCount
    if (guestCount > homeCount) {
        guestScore.className = "leader"
        homeScore.className = 'score'
    } else if(guestCount < homeCount) {
        guestScore.className = 'score'
        homeScore.className = 'leader'
    } else {
        guestScore.className = "score"
        homeScore.className = 'score'
    }
}
function guestTwoBtn() {
    guestCount += 2
    guestScore.innerText=guestCount
    if (guestCount > homeCount) {
        guestScore.className = "leader"
        homeScore.className = 'score'
    } else if(guestCount < homeCount) {
        guestScore.className = 'score'
        homeScore.className = 'leader'
    } else {
        guestScore.className = "score"
        homeScore.className = 'score'
    }
}
function guestThreeBtn() {
    guestCount += 3
    guestScore.innerText=guestCount
    if (guestCount > homeCount) {
        guestScore.className = "leader"
        homeScore.className = 'score'
    } else if(guestCount < homeCount) {
        guestScore.className = 'score'
        homeScore.className = 'leader'
    } else {
        guestScore.className = "score"
        homeScore.className = 'score'
    }
}



function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = 0
    guestScore.innerText = 0
}